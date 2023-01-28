import { Proyecto } from '../entities/proyecto.entity';

export class ProyectoDto {
    id: number;
    nombre: string;
    localidad: string;
    provincia: string;
    tiempoEstimado: string;

    constructor(
        private values: {
            id: number;
            nombre: string;
            localidad: string;
            provincia: string;
            tiempoEstimado: string;
        },
    ) {
        this.id = values.id;
        this.nombre = values.nombre;
        this.localidad = values.localidad;
        this.provincia = values.provincia;
        this.tiempoEstimado = values.tiempoEstimado;
    }

    public static fromEntity(entity: Proyecto) {
        return new ProyectoDto(entity);
    }
}
