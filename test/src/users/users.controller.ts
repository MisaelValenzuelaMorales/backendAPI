import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post()
    async create(@Body() createUsers: any) {
        return this.usersService.create(createUsers);
    }
}
