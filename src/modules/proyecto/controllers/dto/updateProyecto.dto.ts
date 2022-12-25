import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoDto } from './createProyecto.dto';

export class UpdateProyectoDto extends PartialType(CreateProyectoDto) {}
