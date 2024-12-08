import { IsNotEmpty, IsString, IsEmail, MinLength, Matches } from 'class-validator'

export class LoginDto{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email : string;
    
    @IsNotEmpty()
    @IsString()
    password : string;
}