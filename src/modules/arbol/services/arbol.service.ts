import { UpdateArbolDto } from './../controllers/dtos/create-arbol.dto.ts/update-arbol.dto';
import { Arbol } from './../entities/arbol.entity';
import { Injectable, Param, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from '../../proyecto/entities/proyecto.entity';
import { DataSource, In, Repository } from 'typeorm';
import { UsersService } from '../../user/services/user.service';
import { from, map, Observable } from 'rxjs';
import { ArbolDto } from '../dtos/arbol.dto';
import { CreateArbolDto } from '../controllers/dtos/create-arbol.dto.ts/create-arbol.dto';
import { File } from '../../file/entities/file.entity';

@Injectable()
export class ArbolService {
    constructor(
        @InjectRepository(Arbol)
        private arbolRepository: Repository<Arbol>,
        @InjectRepository(Proyecto)
        private proyectoRepository: Repository<Proyecto>,
        @InjectRepository(File)
        private fileRepository: Repository<File>,
        private userService: UsersService,
        private dataSource: DataSource,
    ) {}

    create(arbolDto: CreateArbolDto): Observable<ArbolDto> {
        return from(
            this.dataSource.transaction<Arbol>(async (manager) => {
                const proyecto: Proyecto =
                    await this.proyectoRepository.findOne({
                        where: {
                            id: arbolDto.proyecto,
                        },
                    });
                const entity: Arbol = this.arbolRepository.create({
                    nombre: arbolDto.nombre,
                    proyecto,
                    agallasTermiterosHormigueros:
                        arbolDto.agallasTermiterosHormigueros,
                    altura: arbolDto.altura,
                    barrio: arbolDto.barrio,
                    coeficienteDeEsbeltez: arbolDto.coeficienteDeEsbeltez,
                    conCortezaIncluida: arbolDto.conCortezaIncluida,
                    conDefectosAdicionales: arbolDto.conDefectosAdicionales,
                    cortezaPerdidaMuerta: arbolDto.cortezaPerdidaMuerta,
                    defectosEnRaices: arbolDto.defectosEnRaices,
                    densidadDeCopa: arbolDto.densidadDeCopa,
                    direccion: arbolDto.direccion,
                    enfermedades: arbolDto.enfermedades,
                    espacioDeCrecimiento: arbolDto.espacioDeCrecimiento,
                    especie: arbolDto.especie,
                    exposicionAlVientoDominante:
                        arbolDto.exposicionAlVientoDominante,
                    exudacionDeSavia: arbolDto.exudacionDeSavia,
                    faltante: arbolDto.faltante,
                    forma: arbolDto.forma,
                    inclinacion: arbolDto.inclinacion,
                    latitud: arbolDto.latitud,
                    longitud: arbolDto.longitud,
                    lxCancroTronco: arbolDto.lxCancroTronco,
                    manzana: arbolDto.manzana,
                    movilidadDeBlanco: arbolDto.movilidadDeBlanco,
                    muerto: arbolDto.muerto,
                    perimetro: arbolDto.perimetro,
                    plagas: arbolDto.plagas,
                    platoRadicularORaicesExpuestas:
                        arbolDto.platoRadicularORaicesExpuestas,
                    raicesCuerposFructiferos: arbolDto.raicesCuerposFructiferos,
                    raicesDanoMecanico: arbolDto.raicesDanoMecanico,
                    raicesEstrangulantes: arbolDto.raicesEstrangulantes,
                    ramasCancros: arbolDto.ramasCancros,
                    ramasCavidades: arbolDto.ramasCavidades,
                    ramasCuerposFructiferosEnHongos:
                        arbolDto.ramasCuerposFructiferosEnHongos,
                    ramasColgantesQuebrantes: arbolDto.ramasColgantesQuebrantes,
                    ramasHorquetaConCorteza: arbolDto.ramasHorquetaConCorteza,
                    ramasHorquetaConDefectos: arbolDto.ramasHorquetaConDefectos,
                    ramasHorquetas: arbolDto.ramasHorquetas,
                    ramasMuertas: arbolDto.ramasMuertas,
                    ramasRajaduras: arbolDto.ramasRajaduras,
                    troncoCancros: arbolDto.troncoCancros,
                    ramasInterferenciaElectrica:
                        arbolDto.ramasInterferenciaElectrica,
                    ramasPudricionDeMadera: arbolDto.ramasPudricionDeMadera,
                    ramasSobreextendidas: arbolDto.ramasSobreextendidas,
                    troncoPudricionDeMadera: arbolDto.troncoPudricionDeMadera,
                    troncoCavidades: arbolDto.troncoCavidades,
                    troncoHorquetas: arbolDto.troncoHorquetas,
                    troncoInclinacion: arbolDto.troncoInclinacion,
                    troncoHeridas: arbolDto.troncoHeridas,
                    troncoRajaduras: arbolDto.troncoRajaduras,
                    tEspesorDeParedTronco: arbolDto.tEspesorDeParedTronco,
                    troncoFustesMultiples: arbolDto.troncoFustesMultiples,
                    troncoOrificios: arbolDto.troncoOrificios,
                    restriccionDeUso: arbolDto.restriccionDeUso,
                    tasaDeUso: arbolDto.tasaDeUso,
                    usoBajoElArbol: arbolDto.usoBajoElArbol,
                    valorDeArbol: arbolDto.valorDeArbol,
                    vigor: arbolDto.vigor,
                });
                const archivos: File[] = await this.fileRepository.findBy({
                    id: In(arbolDto.archivos),
                });
                entity.archivos = archivos.map((archivo) => {
                    archivo.arbol = entity;
                    return archivo;
                });
                return this.arbolRepository.save(entity);
            }),
        ).pipe(map((arbol) => ArbolDto.fromEntity(arbol)));
    }

    findAll() {
        return this.arbolRepository.find();
    }

    findOne(id: number): any {
        return this.arbolRepository.findOneBy({ id });
    }

    async findOne2(arbolId: number): Promise<any> {
        const arbol = await this.arbolRepository.findOne({
            where: { id: arbolId },
            relations: ['proyecto'],
        });

        return arbol;
    }

    findByProject(proyecto: number): any {
        return this.dataSource
            .getRepository(Arbol)
            .createQueryBuilder('arbol')
            .where('arbol.proyecto = :proyecto', { proyecto })
            .getMany();
    }

    delete(id: number): any {
        return this.arbolRepository.softRemove({ id });
    }

    async update(id: number, updateArbolDto: UpdateArbolDto) {
        const arbolToUpdate = {};

        const keys = Object.keys(updateArbolDto);

        keys.forEach((element) => {
            if (
                element !== null &&
                element !== undefined &&
                element !== 'proyecto'
            ) {
                arbolToUpdate[String(element)] = updateArbolDto[element];
            }
        });

        arbolToUpdate['updatedAt'] = new Date().toISOString();

        const arbol = await this.arbolRepository.preload({
            id,
            ...arbolToUpdate,
        });
        if (!arbol) throw new NotFoundException(`arbol ${id} not found.`);

        console.log(arbolToUpdate);
        return this.arbolRepository.save(arbol);
    }
}
