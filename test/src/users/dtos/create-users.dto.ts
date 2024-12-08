import { IsNotEmpty, IsString, IsEmail, MinLength, Matches } from 'class-validator'

export class createUserDto{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email : string;
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/(?=.*[A-Z])(?=.*\d)/, { message: 'La contraseña debe tener al menos una letra mayúscula y un número.' })
    password : string;
}