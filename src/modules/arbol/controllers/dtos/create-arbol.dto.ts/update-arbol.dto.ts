import { PartialType } from '@nestjs/mapped-types';
import { CreateArbolDto } from './create-arbol.dto';

export class UpdateArbolDto extends PartialType(CreateArbolDto) {}
