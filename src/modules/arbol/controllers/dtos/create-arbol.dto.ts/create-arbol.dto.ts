import { ApiProperty } from '@nestjs/swagger';

export class CreateArbolDto {
    @ApiProperty({ type: String, description: 'This is a required property' })
    nombre: string;

    @ApiProperty({ type: Number, description: 'This is a required property' })
    proyecto: number;

    @ApiProperty({ type: String, description: 'This is a required property' })
    direccion: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    barrio: string;

    @ApiProperty({ type: String, description: 'This is a required property' })
    manzana: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    faltante: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    muerto: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    latitud: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    longitud: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    especie: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    perimetro: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    altura: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    inclinacion: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    forma: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    valorDeArbol: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    enfermedades: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    plagas: string;

    // factores de carga
    @ApiProperty({ type: String, description: 'This is a optional property' })
    exposicionAlVientoDominante: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    vigor: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    densidadDeCopa: string;

    // condiciones de sitio

    @ApiProperty({ type: String, description: 'This is a optional property' })
    espacioDeCrecimiento: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    platoRadicularORaicesExpuestas: boolean;

    // blanco bajo el arbol

    @ApiProperty({ type: String, description: 'This is a optional property' })
    usoBajoElArbol: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    tasaDeUso: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    movilidadDeBlanco: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    restriccionDeUso: boolean;

    // defectos en las raices

    @ApiProperty({ type: String, description: 'This is a optional property' })
    defectosEnRaices: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    raicesCuerposFructiferos: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    raicesDanoMecanico: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    raicesEstrangulantes: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    agallasTermiterosHormigueros: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoCancros: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    lxCancroTronco: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoCavidades: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    tEspesorDeParedTronco: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    cortezaPerdidaMuerta: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    exudacionDeSavia: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    coeficienteDeEsbeltez: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    conCortezaIncluida: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    conDefectosAdicionales: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoOrificios: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoFustesMultiples: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoHeridas: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoHorquetas: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoInclinacion: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoPudricionDeMadera: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    troncoRajaduras: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasHorquetas: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasHorquetaConCorteza: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasHorquetaConDefectos: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasCancros: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasCavidades: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasCuerposFructiferosEnHongos: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasColgantesQuebrantes: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasMuertas: boolean;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasRajaduras: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasPudricionDeMadera: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasInterferenciaElectrica: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    ramasSobreextendidas: string;

    @ApiProperty({ type: String, description: 'This is a optional property' })
    archivos: File[];
}
