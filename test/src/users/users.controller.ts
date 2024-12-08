import { Controller, Post, Body, Put, Get, Delete, UseGuards} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dtos/create-users.dto';
import { updateUserPswDto } from './dtos/update-users.dto';
import { findUserDto } from './dtos/find-users.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post()
    async create(@Body() createUsers: createUserDto) {
        return await this.usersService.create(createUsers);
    }

    @Put()
    async update(@Body() updateUsersPsw: updateUserPswDto){
        const {email, nuevaPassword} = updateUsersPsw;
        return await this.usersService.updatePassword(updateUsersPsw); 
    }

    @Get()
    async find(@Body() findUser : findUserDto){
        return await this.usersService.find(findUser);
    }

    @Delete()
    async delete(@Body() deleteUser : findUserDto){
        return await this.usersService.delete(deleteUser);
    }
}
