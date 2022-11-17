import {
    IsAlphanumeric,
    IsNotEmpty,
    IsNumber,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(6)
    username: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    @MinLength(6)
    @IsAlphanumeric()
    password: string;
    @IsNotEmpty()
    @IsNumber()
    rol: number;
}
