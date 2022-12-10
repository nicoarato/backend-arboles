import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProyectoDto {
    @IsString()
    nombre: string;

    @IsNumber()
    @IsOptional()
    id: string;
}
