import { IsEmail, IsOptional, IsString, MinLength } from "class-validator"

export class UserSignUpDto{
    @IsString()
    username

    @IsString()
    @IsEmail()
    email

    @IsString()
    @MinLength(6)
    password
}

export class UserLOginDto{
    @IsString()
    @IsEmail()
    email

    @IsString()
    @MinLength(6)
    password
}