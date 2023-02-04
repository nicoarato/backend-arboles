import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';

import { CreateArbolDto } from './dtos/create-arbol.dto.ts/create-arbol.dto';
import { ArbolService } from '../services/arbol.service';
import { Observable } from 'rxjs';
import { ArbolDto } from '../dtos/arbol.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Arbol Module')
@Controller('')
export class ArbolController {
    constructor(private readonly arbolService: ArbolService) {}

    @Post()
    @ApiOperation({ summary: 'Crea un nuevo árbol' })
    create(@Body() createArbolDto: CreateArbolDto): Observable<ArbolDto> {
        return this.arbolService.create(createArbolDto);
    }

    @Get()
    @ApiOperation({ summary: 'Deveulve una lista con todos los árboles' })
    findAll(): any {
        return this.arbolService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Devuelve un árbol por su ID' })
    findOne(@Param('id') id: number): Observable<ArbolDto> {
        return this.arbolService.findOne(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualiza los datos de una árbol por su ID' })
    update(@Body() createArbolDto: CreateArbolDto): Observable<ArbolDto> {
        return this.arbolService.create(createArbolDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Elimina un árbol por su ID' })
    delete(@Param('id') id: number): any {
        return this.arbolService.delete(id);
    }
}
