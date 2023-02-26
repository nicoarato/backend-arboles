import {
    Body,
    Controller,
    Delete,
    forwardRef,
    Get,
    Header,
    HttpCode,
    Inject,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';
import { AllowAnon } from '../../auth/jwt-auth.guard';
import { ApiExcludeEndpoint, ApiOperation, ApiTags } from '@nestjs/swagger';
import { from, map, Observable, switchMap, tap } from 'rxjs';

import { CreateProyectoDto } from './dto/createProyecto.dto';
import { ProyectoDto } from '../dtos/proyecto.dto';
import { UpdateProyectoDto } from './dto/updateProyecto.dto';

import { ProyectoService } from '../services/proyecto.service';
import { ArbolService } from './../../arbol/services/arbol.service';
import { NoTransform } from '../../../interceptors/transform.interceptor';
import { parseAsync } from 'json2csv';
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

    @Post('/:id/export')
    @ApiOperation({ summary: 'get csv report' })
    @NoTransform()
    @HttpCode(200)
    @Header('content-type', 'text/csv')
    @Header('Content-Disposition', 'attachment;filename=reporte.csv')
    getjsontocsv(@Param('id') id: number) {
        console.log(id);
        return from(this.proyectoService.findOne(id)).pipe(
            switchMap((results) => {
                return from(
                    parseAsync(results.arboles, {
                        header: true,
                        fields: [
                            {
                                label: 'Nombre',
                                value: 'nombre',
                                default: '',
                            },
                            {
                                label: 'Direccion',
                                value: 'direccion',
                                default: '',
                            },
                            {
                                label: 'Barrio',
                                value: 'barrio',
                                default: '',
                            },
                            {
                                label: 'Manzana',
                                value: 'manzana',
                                default: '',
                            },
                            {
                                label: 'Faltante',
                                value: 'faltante',
                                default: '',
                            },
                            {
                                label: 'Muerto',
                                value: 'muerto',
                                default: '',
                            },
                            {
                                label: 'Latitud',
                                value: 'latitud',
                                default: '',
                            },
                            {
                                label: 'Longitud',
                                value: 'longitud',
                                default: '',
                            },
                            {
                                label: 'Especie',
                                value: 'especie',
                                default: '',
                            },
                            {
                                label: 'Perimetro',
                                value: 'perimetro',
                                default: '',
                            },
                            {
                                label: 'Altura',
                                value: 'altura',
                                default: '',
                            },
                            {
                                label: 'Inclinacion',
                                value: 'inclinacion',
                                default: '',
                            },
                            { label: 'Forma', value: 'forma', default: '' },
                            {
                                label: 'Valor De Arbol',
                                value: 'valorDeArbol',
                                default: '',
                            },
                            {
                                label: 'Enfermedades',
                                value: 'enfermedades',
                                default: '',
                            },
                            {
                                label: 'Plagas',
                                value: 'plagas',
                                default: '',
                            },
                            {
                                label: 'Exposicion Al Viento Dominante',
                                value: 'exposicionAlVientoDominante',
                                default: '',
                            },
                            { label: 'Vigor', value: 'vigor', default: '' },
                            {
                                label: 'Densidad De Copa',
                                value: 'densidadDeCopa',
                                default: '',
                            },
                            {
                                label: 'Espaci De Crecimiento',
                                value: 'espacioDeCrecimiento',
                                default: '',
                            },
                            {
                                label: 'Plato Radicular O Raices Expuestas',
                                value: 'platoRadicularORaicesExpuestas',
                                default: '',
                            },
                            {
                                label: 'Uso Bajo El Arbol',
                                value: 'usoBajoElArbol',
                                default: '',
                            },
                            {
                                label: 'Tasa De Uso',
                                value: 'tasaDeUso',
                                default: '',
                            },
                            {
                                label: 'Movilidad De Blanco',
                                value: 'movilidadDeBlanco',
                                default: '',
                            },
                            {
                                label: 'Restriccion De Uso',
                                value: 'restriccionDeUso',
                                default: '',
                            },
                            {
                                label: 'Defectos En Raices',
                                value: 'defectosEnRaices',
                                default: '',
                            },
                            {
                                label: 'Raices Cuerpos Fructiferos',
                                value: 'raicesCuerposFructiferos',
                                default: '',
                            },
                            {
                                label: 'Raices Dano Mecanico',
                                value: 'raicesDanoMecanico',
                                default: '',
                            },
                            {
                                label: 'Raices Estrangulantes',
                                value: 'raicesEstrangulantes',
                                default: '',
                            },
                            {
                                label: 'Agallas Termiteros Hormigueros',
                                value: 'agallasTermiterosHormigueros',
                                default: '',
                            },
                            {
                                label: 'Tronco Cancros',
                                value: 'troncoCancros',
                                default: '',
                            },
                            {
                                label: 'Lx Cancro Tronco',
                                value: 'lxCancroTronco',
                                default: '',
                            },
                            {
                                label: 'Tronco Cavidades',
                                value: 'troncoCavidades',
                                default: '',
                            },
                            {
                                label: 'TEspesor De Pared Tronco',
                                value: 'tEspesorDeParedTronco',
                                default: '',
                            },
                            {
                                label: 'Corteza Perdida Muerta',
                                value: 'cortezaPerdidaMuerta',
                                default: '',
                            },
                            {
                                label: 'Exudacion De Savia',
                                value: 'exudacionDeSavia',
                                default: '',
                            },
                            {
                                label: 'Coeficiente De Esbeltez',
                                value: 'coeficienteDeEsbeltez',
                                default: '',
                            },
                            {
                                label: 'ConCorteza Incluida',
                                value: 'conCortezaIncluida',
                                default: '',
                            },
                            {
                                label: 'ConDefectos Adicionales',
                                value: 'conDefectosAdicionales',
                                default: '',
                            },
                            {
                                label: 'Tronco Orificios',
                                value: 'troncoOrificios',
                                default: '',
                            },
                            {
                                label: 'Tronco Fustes Multiples',
                                value: 'troncoFustesMultiples',
                                default: '',
                            },
                            {
                                label: 'Tronco Heridas',
                                value: 'troncoHeridas',
                                default: '',
                            },
                            {
                                label: 'Tronco Horquetas',
                                value: 'troncoHorquetas',
                                default: '',
                            },
                            {
                                label: 'Tronco Inclinacion',
                                value: 'troncoInclinacion',
                                default: '',
                            },
                            {
                                label: 'Tronco Pudricion De Madera',
                                value: 'troncoPudricionDeMadera',
                                default: '',
                            },
                            {
                                label: 'Tronco Rajaduras',
                                value: 'troncoRajaduras',
                                default: '',
                            },
                            {
                                label: 'Ramas Horquetas',
                                value: 'ramasHorquetas',
                                default: '',
                            },
                            {
                                label: 'Ramas Horqueta Con Corteza',
                                value: 'ramasHorquetaConCorteza',
                                default: '',
                            },
                            {
                                label: 'Ramas Horqueta Con Defectos',
                                value: 'ramasHorquetaConDefectos',
                                default: '',
                            },
                            {
                                label: 'Ramas Cancros',
                                value: 'ramasCancros',
                                default: '',
                            },
                            {
                                label: 'Ramas Cavidades',
                                value: 'ramasCavidades',
                                default: '',
                            },
                            {
                                label: 'Ramas Cuerpos Fructiferos En Hongos',
                                value: 'ramasCuerposFructiferosEnHongos',
                                default: '',
                            },
                            {
                                label: 'Ramas Colgantes Quebrantes',
                                value: 'ramasColgantesQuebrantes',
                                default: '',
                            },
                            {
                                label: 'Ramas Muertas',
                                value: 'ramasMuertas',
                                default: '',
                            },
                            {
                                label: 'Ramas Rajaduras',
                                value: 'ramasRajaduras',
                                default: '',
                            },
                            {
                                label: 'Ramas Pudricion De Madera',
                                value: 'ramasPudricionDeMadera',
                                default: '',
                            },
                            {
                                label: 'Ramas Interferencia Electrica',
                                value: 'ramasInterferenciaElectrica',
                                default: '',
                            },
                            {
                                label: 'Ramas Sobreextendidas',
                                value: 'ramasSobreextendidas',
                                default: '',
                            },
                        ],
                    }),
                );
            }),
        );
    }
}
