import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { AllowAnon } from '../../auth/jwt-auth.guard';
import { ProyectoService } from '../services/proyecto.service';
import { CreateProyectoDto } from './dto/createProyecto.dto';
import { Observable } from 'rxjs';
import { ProyectoDto } from '../dtos/proyecto.dto';
import { UpdateProyectoDto } from './dto/updateProyecto.dto';

@Controller('')
export class ProyectoController {
    constructor(private readonly proyectoService: ProyectoService) {}
    @Post()
    @AllowAnon()
    create(@Body() proyecto: CreateProyectoDto): Observable<ProyectoDto> {
        return this.proyectoService.create(proyecto);
    }

    @Post(':id/asociate/:user')
    @AllowAnon()
    asociate(
        @Param('id', ParseIntPipe) proyecto: number,
        @Param('user', ParseIntPipe) user: number,
    ): Observable<ProyectoDto> {
        return this.proyectoService.asociate(proyecto, user);
    }

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
}
