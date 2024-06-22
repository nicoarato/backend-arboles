import { UpdateArbolDto } from './dtos/create-arbol.dto.ts/update-arbol.dto';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Res,
} from '@nestjs/common';
import { Response } from 'express'; // Import the Response type from 'express'

import { createReadStream } from 'fs';

import { CreateArbolDto } from './dtos/create-arbol.dto.ts/create-arbol.dto';
import { ArbolService } from '../services/arbol.service';
import { ExportArbolService } from '../services/export-arbol.service';
import { Observable } from 'rxjs';
import { ArbolDto } from '../dtos/arbol.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Arbol Module')
@Controller('')
export class ArbolController {
    constructor(
        private readonly arbolService: ArbolService,
        private readonly exportArbolService: ExportArbolService,
    ) {}

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
    findOne(@Param('id') id: number): any {
        return this.arbolService.findOne2(id);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Actualiza los datos de una árbol por su ID' })
    update(
        @Param('id') id: number,
        @Body() updateArbolDto: UpdateArbolDto,
    ): Promise<any> {
        return this.arbolService.update(id, updateArbolDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Elimina un árbol por su ID' })
    delete(@Param('id') id: number): any {
        return this.arbolService.delete(id);
    }

    @Get('export/csv/:proyectoId')
    @ApiOperation({
        summary: 'Exporta los árboles de un proyecto a un archivo CSV',
    })
    async exportToCSV(
        @Param('proyectoId') proyectoId: number,
        @Res() res: Response,
    ): Promise<void> {
        const filePath = await this.exportArbolService.exportToCSV(proyectoId);
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader(
            'Content-Disposition',
            `attachment; filename="arboles_${proyectoId}.csv"`,
        );
        const fileStream = createReadStream(filePath);
        fileStream.pipe(res);
    }
}
