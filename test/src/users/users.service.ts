import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.interface';
import { createUserDto } from './dtos/create-users.dto';
import * as bcrypt from 'bcrypt';
import { updateUserPswDto } from './dtos/update-users.dto';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { findUserDto } from './dtos/find-users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('Users') private usersModel: Model<Users>) {}
    // Crear nuevo usuario
    async create(createUserDto: createUserDto): Promise<Users> {
        const { email, password} = createUserDto;
        const user = await this.usersModel.findOne({email});
        const hashedPassword = bcrypt.hashSync(password, 10);
        if(user){
            throw new NotFoundException("Usuario ya registrado")
        } else {
            const createdUsers = new this.usersModel({
                email: email,
                password: hashedPassword,
            });    
            return createdUsers.save();
        }
    }

    // Actualizar contraseña de usuario con su email
    async updatePassword(updateUserPswDto: updateUserPswDto): Promise<string>{
        const { email, password, nuevaPassword} = updateUserPswDto;
        const user = await this.usersModel.findOne({email});
        if(!user){
            throw new NotFoundException('Usuario no registrado');
        } else {
            const verificaPsw = await bcrypt.compare(password, user.password);
            if(!verificaPsw){
                throw new UnauthorizedException("La contraseña es incorrecta")
            } else {
                const hashPassword = await bcrypt.hash(nuevaPassword, 10);
                user.password = hashPassword;
                user.save();
            }
        }
        return "Contraseña actualizada";
    }
    // Encontrar un usuario
    async find(findUser : findUserDto): Promise<Users>{
        const email = findUser.email
        const user = await this.usersModel.findOne({email});
        return user;
    }
    // Eliminar un usuario
    async delete(deleteUser : findUserDto): Promise<String>{
        const email = deleteUser.email
        this.usersModel.findOneAndDelete({email}).exec();
        return "Usuario eliminado";
    }
}
