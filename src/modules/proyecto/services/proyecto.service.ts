import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from '../entities/proyecto.entity';
import { DataSource, Repository } from 'typeorm';
import { ProyectoDto } from '../dtos/proyecto.dto';
import { from, map, Observable, of, switchMap, zip } from 'rxjs';
import { UsersService } from '../../user/services/user.service';
import { User } from '../../user/entity/user.entity';
import { BusinessException } from '../../../exceptions/business.exception';

@Injectable()
export class ProyectoService {
    constructor(
        @InjectRepository(Proyecto)
        private proyectoRepository: Repository<Proyecto>,
        private userService: UsersService,
        private dataSource: DataSource,
    ) {}

    create(proyecto: { nombre: string }): Observable<ProyectoDto> {
        return from(
            this.dataSource.transaction<Proyecto>(async (manager) => {
                const entity: Proyecto = this.proyectoRepository.create({
                    nombre: proyecto.nombre,
                });
                return this.proyectoRepository.save(entity);
            }),
        ).pipe(map((proyecto) => ProyectoDto.fromEntity(proyecto)));
    }

    asociate(idProyecto: number, idUser: number): Observable<ProyectoDto> {
        return zip(
            this.proyectoRepository.findOne({
                where: {
                    id: idProyecto,
                },
                relations: {
                    usuarios: true,
                },
                withDeleted: false,
            }),
            this.userService.findOne(idUser),
        ).pipe(
            switchMap(async ([proyecto, user]: [Proyecto, User]) => {
                if (!proyecto) {
                    throw new BusinessException('No se encontró el proyecto');
                }
                if (!user) {
                    throw new BusinessException('No se encontró el usuario');
                }
                return this.dataSource.transaction(async (manager) => {
                    console.log(proyecto, user);
                    proyecto.usuarios.push(user);
                    await this.proyectoRepository.save(proyecto);
                    return ProyectoDto.fromEntity(proyecto);
                });
            }),
        );
    }

    desasociate(idProyecto: number, idUser: number): Observable<ProyectoDto> {
        return zip(
            this.proyectoRepository.findOne({
                where: {
                    id: idProyecto,
                },
                relations: {
                    usuarios: true,
                },
                withDeleted: false,
            }),
            this.userService.findOne(idUser),
        ).pipe(
            switchMap(async ([proyecto, user]: [Proyecto, User]) => {
                if (!proyecto) {
                    throw new BusinessException('No se encontró el proyecto');
                }
                if (!user) {
                    throw new BusinessException('No se encontró el usuario');
                }
                return this.dataSource.transaction(async (manager) => {
                    proyecto.usuarios = proyecto.usuarios.filter(
                        (iUser) => iUser.id !== user.id,
                    );
                    await this.proyectoRepository.save(proyecto);
                    return ProyectoDto.fromEntity(proyecto);
                });
            }),
        );
    }
}
