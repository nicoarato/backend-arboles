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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Arbol Module')
@Controller('')
export class ArbolController {
    constructor(private readonly arbolService: ArbolService) { }
    @Post()
    create(@Body() createArbolDto: CreateArbolDto): Observable<ArbolDto> {
        return this.arbolService.create(createArbolDto);
    }

    @Get()
    findAll(): any {
        return this.arbolService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Observable<ArbolDto> {
        return this.arbolService.findOne(id);
    }

    @Patch(':id')
    update(@Body() createArbolDto: CreateArbolDto): Observable<ArbolDto> {
        return this.arbolService.create(createArbolDto);
    }

    @Delete(':id')
    delete(@Param('id') id: number): any {
        return this.arbolService.delete(id);
    }
}
