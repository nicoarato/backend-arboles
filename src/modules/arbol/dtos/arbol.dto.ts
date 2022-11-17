import { ProyectoDto } from '../../proyecto/dtos/proyecto.dto';
import { Arbol } from '../entities/arbol.entity';

export class ArbolDto {
    id: number;
    nombre: string;
    proyecto: ProyectoDto;
    createdAt: Date;
    updatedAt: Date;
    direccion: string;
    barrio: string;
    manzana: string;
    faltante: boolean;
    muerto: boolean;
    latitud: string;
    longitud: string;
    especie: string;
    perimetro: string;
    altura: string;
    inclinacion: string;
    forma: string;
    valorDeArbol: string;
    enfermedades: string;
    plagas: string;
    // factores de carga
    exposicionAlVientoDominante: boolean;
    vigor: string;
    densidadDeCopa: string;
    // condiciones de sitio
    espacioDeCrecimiento: string;
    platoRadicularORaicesExpuestas: boolean;
    // blanco bajo el arbol
    usoBajoElArbol: boolean;
    tasaDeUso: string;
    movilidadDeBlanco: boolean;
    restriccionDeUso: boolean;
    // defectos en las raices
    defectosEnRaices: boolean;
    raicesCuerposFructiferos: boolean;
    raicesDanoMecanico: boolean;
    raicesEstrangulantes: boolean;
    agallasTermiterosHormigueros: string;
    troncoCancros: string;
    lxCancroTronco: string;
    troncoCavidades: string;
    tEspesorDeParedTronco: string;
    cortezaPerdidaMuerta: string;
    exudacionDeSavia: string;
    coeficienteDeEsbeltez: string;
    conCortezaIncluida: string;
    conDefectosAdicionales: string;
    troncoOrificios: string;
    troncoFustesMultiples: string;
    troncoHeridas: string;
    troncoHorquetas: boolean;
    troncoInclinacion: string;
    troncoPudricionDeMadera: string;
    troncoRajaduras: string;
    ramasHorquetas: string;
    ramasHorquetaConCorteza: string;
    ramasHorquetaConDefectos: string;
    ramasCancros: string;
    ramasCavidades: string;
    ramasCuerposFructiferosEnHongos: string;
    ramasColgantesQuebrantes: string;
    ramasMuertas: boolean;
    ramasRajaduras: string;
    ramasPudricionDeMadera: string;
    ramasInterferenciaElectrica: string;
    ramasSobreextendidas: string;

    static fromEntity(entity: Arbol): ArbolDto {
        return {
            id: entity.id,
            nombre: entity.nombre,
            proyecto: entity.proyecto
                ? ProyectoDto.fromEntity(entity.proyecto)
                : undefined,
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
            direccion: entity.direccion,
            barrio: entity.barrio,
            manzana: entity.manzana,
            faltante: entity.faltante,
            muerto: entity.muerto,
            latitud: entity.latitud,
            longitud: entity.longitud,
            especie: entity.especie,
            perimetro: entity.perimetro,
            altura: entity.altura,
            inclinacion: entity.inclinacion,
            forma: entity.forma,
            valorDeArbol: entity.valorDeArbol,
            enfermedades: entity.enfermedades,
            plagas: entity.plagas,
            exposicionAlVientoDominante: entity.exposicionAlVientoDominante,
            vigor: entity.vigor,
            densidadDeCopa: entity.densidadDeCopa,
            espacioDeCrecimiento: entity.espacioDeCrecimiento,
            platoRadicularORaicesExpuestas:
                entity.platoRadicularORaicesExpuestas,
            usoBajoElArbol: entity.usoBajoElArbol,
            tasaDeUso: entity.tasaDeUso,
            movilidadDeBlanco: entity.movilidadDeBlanco,
            restriccionDeUso: entity.restriccionDeUso,
            defectosEnRaices: entity.defectosEnRaices,
            raicesCuerposFructiferos: entity.raicesCuerposFructiferos,
            raicesDanoMecanico: entity.raicesDanoMecanico,
            raicesEstrangulantes: entity.raicesEstrangulantes,
            agallasTermiterosHormigueros: entity.agallasTermiterosHormigueros,
            troncoCancros: entity.troncoCancros,
            lxCancroTronco: entity.lxCancroTronco,
            troncoCavidades: entity.troncoCavidades,
            tEspesorDeParedTronco: entity.tEspesorDeParedTronco,
            cortezaPerdidaMuerta: entity.cortezaPerdidaMuerta,
            exudacionDeSavia: entity.exudacionDeSavia,
            coeficienteDeEsbeltez: entity.coeficienteDeEsbeltez,
            conCortezaIncluida: entity.conCortezaIncluida,
            conDefectosAdicionales: entity.conDefectosAdicionales,
            troncoOrificios: entity.troncoOrificios,
            troncoFustesMultiples: entity.troncoFustesMultiples,
            troncoHeridas: entity.troncoHeridas,
            troncoHorquetas: entity.troncoHorquetas,
            troncoInclinacion: entity.troncoInclinacion,
            troncoPudricionDeMadera: entity.troncoPudricionDeMadera,
            troncoRajaduras: entity.troncoRajaduras,
            ramasHorquetas: entity.ramasHorquetas,
            ramasHorquetaConCorteza: entity.ramasHorquetaConCorteza,
            ramasHorquetaConDefectos: entity.ramasHorquetaConDefectos,
            ramasCancros: entity.ramasCancros,
            ramasCavidades: entity.ramasCavidades,
            ramasCuerposFructiferosEnHongos:
                entity.ramasCuerposFructiferosEnHongos,
            ramasColgantesQuebrantes: entity.ramasColgantesQuebrantes,
            ramasMuertas: entity.ramasMuertas,
            ramasRajaduras: entity.ramasRajaduras,
            ramasPudricionDeMadera: entity.ramasPudricionDeMadera,
            ramasInterferenciaElectrica: entity.ramasInterferenciaElectrica,
            ramasSobreextendidas: entity.ramasSobreextendidas,
        };
    }
}
