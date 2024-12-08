import { IsNotEmpty, IsString, IsEmail, MinLength, Matches, IsOptional } from 'class-validator'

export class updateUserPswDto{
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsString()
    password : string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    @Matches(/(?=.*[A-Z])(?=.*\d)/, { message: 'La contraseña debe tener al menos una letra mayúscula y un número.' })
    nuevaPassword : string;
}