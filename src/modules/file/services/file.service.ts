import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { from, map, Observable, of, switchMap, zip } from 'rxjs';
import { UsersService } from '../../user/services/user.service';
import { User } from '../../user/entity/user.entity';
import { BusinessException } from '../../../exceptions/business.exception';
import { File } from '../entities/file.entity';
import { Proyecto } from '../../proyecto/entities/proyecto.entity';
import { ProyectoDto } from '../../proyecto/dtos/proyecto.dto';
import { FileDto } from '../dtos/proyecto.dto';
@Injectable()
export class FileService {
    constructor(
        @InjectRepository(File)
        private fileRepository: Repository<File>,
        private userService: UsersService,
        private dataSource: DataSource,
    ) {}

    findAll(): Observable<FileDto[]> {
        return from(this.fileRepository.find({})).pipe(
            map((files) => files.map((file) => FileDto.fromEntity(file))),
        );
    }

    findOne(id: number): Observable<FileDto> {
        return from(this.fileRepository.findOneBy({ id })).pipe(
            map((file) => FileDto.fromEntity(file)),
        );
    }

    findOneWithFilename(
        id: number,
    ): Observable<{ file: FileDto; filename: string }> {
        return from(this.fileRepository.findOneBy({ id })).pipe(
            map((file) => {
                return {
                    file: FileDto.fromEntity(file),
                    filename: file.filename,
                };
            }),
        );
    }

    async deleteFile(id: number): Promise<void> {
        await this.fileRepository.delete(id);
    }

    createFile(file: Express.Multer.File): Observable<FileDto> {
        return from(
            this.dataSource.transaction<File>(async (manager) => {
                const entity: File = this.fileRepository.create({
                    nombre: file.originalname,
                    filename: file.filename,
                    size: file.size,
                    mimetype: file.mimetype,
                });
                return this.fileRepository.save(entity);
            }),
        ).pipe(map((file) => FileDto.fromEntity(file)));
    }
}
