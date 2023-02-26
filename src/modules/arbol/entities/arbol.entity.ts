import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Proyecto } from '../../proyecto/entities/proyecto.entity';
import { ApiProperty } from '@nestjs/swagger';
import { File } from '../../file/entities/file.entity';

@Entity()
export class Arbol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne((type) => Proyecto, { nullable: false })
    @JoinColumn({ name: 'proyecto_id' })
    proyecto: Proyecto;

    @OneToMany((type) => File, (archivo) => archivo.arbol, {
        cascade: ['update'],
    })
    archivos: File[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column()
    direccion: string;

    @Column()
    barrio: string;

    @Column()
    manzana: string;

    @Column()
    faltante: boolean;

    @Column()
    muerto: boolean;

    @Column()
    latitud: string;

    @Column()
    longitud: string;

    @Column()
    especie: string;

    @Column()
    perimetro: string;

    @Column()
    altura: string;

    @Column()
    inclinacion: string;

    @Column()
    forma: string;

    @Column({ name: 'valor_de_arbol' })
    valorDeArbol: string;

    @Column()
    enfermedades: string;

    @Column()
    plagas: string;
    // factores de carga

    @Column({ name: 'exposicion_al_viento_dominante' })
    exposicionAlVientoDominante: boolean;

    @Column()
    vigor: string;

    @Column({ name: 'densidad_de_copa' })
    densidadDeCopa: string;
    // condiciones de sitio

    @Column({ name: 'espacio_de_crecimiento' })
    espacioDeCrecimiento: string;

    @Column({ name: 'plato_radicular_o_raices_expuestas' })
    platoRadicularORaicesExpuestas: boolean;
    // blanco bajo el arbol

    @Column({ name: 'uso_bajo_el_arbol' })
    usoBajoElArbol: boolean;

    @Column({ name: 'tasa_de_uso' })
    tasaDeUso: string;

    @Column({ name: 'movilidad_de_blanco' })
    movilidadDeBlanco: boolean;

    @Column({ name: 'restriccion_de_uso' })
    restriccionDeUso: boolean;
    // defectos en las raices

    @Column({ name: 'defectos_en_raices' })
    defectosEnRaices: boolean;

    @Column({ name: 'raices_cuerpos_fructiferos' })
    raicesCuerposFructiferos: boolean;

    @Column({ name: 'raices_dano_mecanico' })
    raicesDanoMecanico: boolean;

    @Column({ name: 'raices_estrangulantes' })
    raicesEstrangulantes: boolean;

    @Column({ name: 'agallas_termiteros_hormigueros' })
    agallasTermiterosHormigueros: string;

    @Column({ name: 'tronco_cancros' })
    troncoCancros: string;

    @Column({ name: 'lx_cancro_tronco' })
    lxCancroTronco: string;

    @Column({ name: 'tronco_cavidades' })
    troncoCavidades: string;

    @Column({ name: 't_espesor_de_pared_tronco' })
    tEspesorDeParedTronco: string;

    @Column({ name: 'corteza_perdida_muerta' })
    cortezaPerdidaMuerta: string;

    @Column({ name: 'exudacion_de_savia' })
    exudacionDeSavia: string;

    @Column({ name: 'coeficiente_de_esbeltez' })
    coeficienteDeEsbeltez: string;

    @Column({ name: 'con_corteza_incluida' })
    conCortezaIncluida: string;

    @Column({ name: 'con_defectos_adicionales' })
    conDefectosAdicionales: string;

    @Column({ name: 'tronco_orificios' })
    troncoOrificios: string;

    @Column({ name: 'tronco_fustes_multiples' })
    troncoFustesMultiples: string;

    @Column({ name: 'tronco_heridas' })
    troncoHeridas: string;

    @Column({ name: 'tronco_horquetas' })
    troncoHorquetas: boolean;

    @Column({ name: 'tronco_inclinacion' })
    troncoInclinacion: string;

    @Column({ name: 'tronco_pudricion_de_madera' })
    troncoPudricionDeMadera: string;

    @Column({ name: 'tronco_rajaduras' })
    troncoRajaduras: string;

    @Column({ name: 'ramas_horquetas' })
    ramasHorquetas: string;

    @Column({ name: 'ramas_horqueta_con_corteza' })
    ramasHorquetaConCorteza: string;

    @Column({ name: 'ramas_horqueta_con_defectos' })
    ramasHorquetaConDefectos: string;

    @Column({ name: 'ramas_cancros' })
    ramasCancros: string;

    @Column({ name: 'ramas_cavidades' })
    ramasCavidades: string;

    @Column({ name: 'ramas_cuerpos_fructiferos_en_hongos' })
    ramasCuerposFructiferosEnHongos: string;

    @Column({ name: 'ramas_colgantes_quebrantes' })
    ramasColgantesQuebrantes: string;

    @Column({ name: 'ramas_muertas' })
    ramasMuertas: boolean;

    @Column({ name: 'ramas_rajaduras' })
    ramasRajaduras: string;

    @Column({ name: 'ramas_pudricion_de_madera' })
    ramasPudricionDeMadera: string;

    @Column({ name: 'ramas_interferencia_electrica' })
    ramasInterferenciaElectrica: string;

    @Column({ name: 'ramas_sobreextendidas' })
    ramasSobreextendidas: string;
}
