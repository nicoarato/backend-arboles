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
        private readonly arbolRepository: Repository<Arbol>,
        @InjectRepository(Proyecto)
        private readonly proyectoRepository: Repository<Proyecto>,
        @InjectRepository(File)
        private readonly fileRepository: Repository<File>,
        private readonly dataSource: DataSource,
    ) { }

    create(arbolDto: CreateArbolDto): Observable<ArbolDto> {
        return from(
            this.dataSource.transaction<Arbol>(async (manager) => {
                const proyecto: Proyecto =
                    await this.proyectoRepository.findOne({
                        where: {
                            id: arbolDto.proyecto,
                        },
                    });

                if (!proyecto) {
                    throw new Error('Proyecto no encontrado');
                }

                const entity: Arbol = this.arbolRepository.create({
                    ...arbolDto,
                    proyecto,
                });

                if (
                    Array.isArray(arbolDto.archivos) &&
                    arbolDto.archivos.length > 0
                ) {
                    const archivos: File[] = await this.fileRepository.findBy({
                        id: In(arbolDto.archivos),
                    });
                    entity.archivos = archivos.map((archivo) => {
                        archivo.arbol = entity;
                        return archivo;
                    });
                } else {
                    entity.archivos = [];
                }

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

    delete(id: number): Observable<void> {
        return from(
            this.arbolRepository.findOneBy({ id }).then((arbol) => {
                if (!arbol) {
                    throw new Error('Árbol no encontrado');
                }
                return this.arbolRepository.softRemove(arbol);
            }),
        ).pipe(map(() => void 0)); // Transformamos el resultado a void
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

        console.log('Params updated: ', arbolToUpdate);
        return this.arbolRepository.save(arbol);
    }
}
