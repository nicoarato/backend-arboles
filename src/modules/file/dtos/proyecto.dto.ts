import { File } from '../entities/file.entity';

export class FileDto {
    id: number;
    nombre: string;
    mimetype: string;
    size: number;
    createdAt: Date;
    constructor(values: {
        id: number;
        nombre: string;
        mimetype: string;
        filename: string;
        size: number;
        createdAt: Date;
    }) {
        this.id = values.id;
        this.nombre = values.nombre;
        this.mimetype = values.mimetype;
        this.size = values.size;
        this.createdAt = values.createdAt;
    }

    public static fromEntity(entity: File) {
        return new FileDto(entity);
    }
}
