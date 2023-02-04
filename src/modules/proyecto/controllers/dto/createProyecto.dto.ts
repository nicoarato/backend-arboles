import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProyectoDto {
    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsString()
    nombre: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsNumber()
    @IsOptional()
    id: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsString()
    @IsOptional()
    localidad: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsString()
    @IsOptional()
    provincia: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    @IsString()
    @IsOptional()
    tiempoEstimado: string;
}
