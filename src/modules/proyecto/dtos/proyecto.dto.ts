import { Proyecto } from '../entities/proyecto.entity';

export class ProyectoDto {
    id: number;
    nombre: string;

    constructor(private values: { id: number; nombre: string }) {
        this.id = values.id;
        this.nombre = values.nombre;
    }

    public static fromEntity(entity: Proyecto) {
        return new ProyectoDto(entity);
    }
}
