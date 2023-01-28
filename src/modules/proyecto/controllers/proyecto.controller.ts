import {
    Body,
    Controller,
    Delete,
    forwardRef,
    Get,
    Inject,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { AllowAnon } from '../../auth/jwt-auth.guard';
import { ApiExcludeEndpoint, ApiTags } from '@nestjs/swagger';
import { Observable } from 'rxjs';

import { CreateProyectoDto } from './dto/createProyecto.dto';
import { ProyectoDto } from '../dtos/proyecto.dto';
import { UpdateProyectoDto } from './dto/updateProyecto.dto';

import { ProyectoService } from '../services/proyecto.service';
import { ArbolService } from './../../arbol/services/arbol.service';
@ApiTags('Proyecto Module')
@Controller('')
export class ProyectoController {
    constructor(
        private readonly proyectoService: ProyectoService,
        private arbolService: ArbolService,
    ) {}
    @Post()
    @AllowAnon()
    create(@Body() proyecto: CreateProyectoDto): Observable<ProyectoDto> {
        return this.proyectoService.create(proyecto);
    }

    @ApiExcludeEndpoint()
    @Post(':id/asociate/:user')
    @AllowAnon()
    asociate(
        @Param('id', ParseIntPipe) proyecto: number,
        @Param('user', ParseIntPipe) user: number,
    ): Observable<ProyectoDto> {
        return this.proyectoService.asociate(proyecto, user);
    }
    @ApiExcludeEndpoint()
    @Post(':id/desasociate/:user')
    @AllowAnon()
    desasociate(
        @Param('id', ParseIntPipe) proyecto: number,
        @Param('user', ParseIntPipe) user: number,
    ): Observable<ProyectoDto> {
        return this.proyectoService.desasociate(proyecto, user);
    }

    @Get()
    findAll(): any {
        return this.proyectoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): any {
        return this.proyectoService.findOne(id);
    }

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updateProyectoDto: UpdateProyectoDto,
    ) {
        return this.proyectoService.update(id, updateProyectoDto);
    }

    @Delete(':id')
    delete(
        @Param('id') id: number,
        @Body() updateProyectoDto: UpdateProyectoDto,
    ) {
        return this.proyectoService.update(id, updateProyectoDto);
    }

    @Get('/:id/arboles')
    async getTreesByProject(@Param('id') id: number) {
        return this.arbolService.findByProject(id);
    }
}
