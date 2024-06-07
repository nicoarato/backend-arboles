import { Proyecto } from '../entities/proyecto.entity';
import { FileDto } from '../../file/dtos/proyecto.dto';
import { Arbol } from '../../arbol/entities/arbol.entity';
import { ArbolDto } from '../../arbol/dtos/arbol.dto';

export class ProyectoDto {
    id: number;
    nombre: string;
    localidad: string;
    provincia: string;
    tiempoEstimado: string;
    arboles: ArbolDto[];

    constructor(values: {
        id: number;
        nombre: string;
        localidad: string;
        provincia: string;
        tiempoEstimado: string;
        arboles: ArbolDto[];
    }) {
        this.id = values.id;
        this.nombre = values.nombre;
        this.localidad = values.localidad;
        this.provincia = values.provincia;
        this.tiempoEstimado = values.tiempoEstimado;
        this.arboles = values.arboles;
    }

    public static fromEntity(entity: Proyecto) {
        return new ProyectoDto({
            ...entity,
            arboles: entity.arboles
                ? entity.arboles.map((arbol) => ArbolDto.fromEntity(arbol))
                : [],
        });
    }
}
