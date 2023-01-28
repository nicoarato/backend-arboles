import { ProyectoDto } from '../../../../proyecto/dtos/proyecto.dto';

export class CreateArbolDto {
    nombre: string;
    proyecto: number;
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
}
