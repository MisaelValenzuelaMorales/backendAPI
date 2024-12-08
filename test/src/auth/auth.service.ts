
import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
) {}

async login(email: string, password: string) {
    const user = await this.usersService.find({ email });

    if (!user) {
      throw new NotFoundException('Usuario no existe');  // Si el usuario no existe, lanzamos un error
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
      throw new Error('Invalid password');  // Si la contraseña es incorrecta
    }
    const payload = {sub: user._id, username: user.email};
    return{
        access_token: await this.jwtService.signAsync(payload),
    };
  }
}
