import { IsNotEmpty, IsString, IsEmail, MinLength, Matches } from 'class-validator'

export class findUserDto{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email : string;
}