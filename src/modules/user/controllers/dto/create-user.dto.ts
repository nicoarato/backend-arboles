import { ApiProperty } from '@nestjs/swagger';
import {
    IsAlphanumeric,
    IsNotEmpty,
    IsNumber,
    MinLength,
} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNotEmpty()
    @MinLength(6)
    username: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNotEmpty()
    lastname: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNotEmpty()
    @MinLength(6)
    @IsAlphanumeric()
    password: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNotEmpty()
    email: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNotEmpty()
    address: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNotEmpty()
    city: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNotEmpty()
    state: string;

    @ApiProperty({ type: Number, description: 'This is a required property' })
    @IsNotEmpty()
    @IsNumber()
    rol: number;
}
