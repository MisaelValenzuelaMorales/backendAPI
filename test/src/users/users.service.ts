import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { users } from './schemas/users.chema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(users.name) private usersModel: Model<users>) {}

    async create(users:any) {
        const createdUsers = new this.usersModel(users);
        return createdUsers.save();
    }

}
