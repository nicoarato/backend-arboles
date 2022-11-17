import { IsString } from 'class-validator';

export class CreateProyectoDto {
    @IsString()
    nombre: string;
}
