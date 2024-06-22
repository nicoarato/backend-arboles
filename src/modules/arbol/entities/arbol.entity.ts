import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from 'typeorm';
import { Proyecto } from '../../proyecto/entities/proyecto.entity';
import { File } from '../../file/entities/file.entity';

@Entity()
export class Arbol {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(() => Proyecto, { nullable: false })
    @JoinColumn({ name: 'proyecto_id' })
    proyecto: Proyecto;

    @OneToMany(() => File, (archivo) => archivo.arbol, {
        cascade: ['update'],
    })
    archivos: File[];

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', nullable: true })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
    deletedAt: Date;

    @Column({ nullable: true })
    direccion: string;

    @Column({ nullable: true })
    barrio: string;

    @Column({ nullable: true })
    manzana: string;

    @Column({ nullable: true })
    faltante: boolean;

    @Column({ nullable: true })
    muerto: boolean;

    @Column({ nullable: true })
    latitud: string;

    @Column({ nullable: true })
    longitud: string;

    @Column({ nullable: true })
    especie: string;

    @Column({ nullable: true })
    perimetro: string;

    @Column({ nullable: true })
    altura: string;

    @Column({ nullable: true })
    inclinacion: string;

    @Column({ nullable: true })
    forma: string;

    @Column({ name: 'valor_de_arbol', nullable: true })
    valorDeArbol: string;

    @Column({ nullable: true })
    enfermedades: string;

    @Column({ nullable: true })
    plagas: string;
    // factores de carga

    @Column({ name: 'exposicion_al_viento_dominante', nullable: true })
    exposicionAlVientoDominante: boolean;

    @Column({ nullable: true })
    vigor: string;

    @Column({ name: 'densidad_de_copa', nullable: true })
    densidadDeCopa: string;
    // condiciones de sitio

    @Column({ name: 'espacio_de_crecimiento', nullable: true })
    espacioDeCrecimiento: string;

    @Column({ name: 'plato_radicular_o_raices_expuestas', nullable: true })
    platoRadicularORaicesExpuestas: boolean;
    // blanco bajo el arbol

    @Column({ name: 'uso_bajo_el_arbol', nullable: true })
    usoBajoElArbol: boolean;

    @Column({ name: 'tasa_de_uso', nullable: true })
    tasaDeUso: string;

    @Column({ name: 'movilidad_de_blanco', nullable: true })
    movilidadDeBlanco: boolean;

    @Column({ name: 'restriccion_de_uso', nullable: true })
    restriccionDeUso: boolean;
    // defectos en las raices

    @Column({ name: 'defectos_en_raices', nullable: true })
    defectosEnRaices: boolean;

    @Column({ name: 'raices_cuerpos_fructiferos', nullable: true })
    raicesCuerposFructiferos: boolean;

    @Column({ name: 'raices_dano_mecanico', nullable: true })
    raicesDanoMecanico: boolean;

    @Column({ name: 'raices_estrangulantes', nullable: true })
    raicesEstrangulantes: boolean;

    @Column({ name: 'agallas_termiteros_hormigueros', nullable: true })
    agallasTermiterosHormigueros: string;

    @Column({ name: 'tronco_cancros', nullable: true })
    troncoCancros: string;

    @Column({ name: 'lx_cancro_tronco', nullable: true })
    lxCancroTronco: string;

    @Column({ name: 'tronco_cavidades', nullable: true })
    troncoCavidades: string;

    @Column({ name: 't_espesor_de_pared_tronco', nullable: true })
    tEspesorDeParedTronco: string;

    @Column({ name: 'corteza_perdida_muerta', nullable: true })
    cortezaPerdidaMuerta: string;

    @Column({ name: 'exudacion_de_savia', nullable: true })
    exudacionDeSavia: string;

    @Column({ name: 'coeficiente_de_esbeltez', nullable: true })
    coeficienteDeEsbeltez: string;

    @Column({ name: 'con_corteza_incluida', nullable: true })
    conCortezaIncluida: string;

    @Column({ name: 'con_defectos_adicionales', nullable: true })
    conDefectosAdicionales: string;

    @Column({ name: 'tronco_orificios', nullable: true })
    troncoOrificios: string;

    @Column({ name: 'tronco_fustes_multiples', nullable: true })
    troncoFustesMultiples: string;

    @Column({ name: 'tronco_heridas', nullable: true })
    troncoHeridas: string;

    @Column({ name: 'tronco_horquetas', nullable: true })
    troncoHorquetas: boolean;

    @Column({ name: 'tronco_inclinacion', nullable: true })
    troncoInclinacion: string;

    @Column({ name: 'tronco_pudricion_de_madera', nullable: true })
    troncoPudricionDeMadera: string;

    @Column({ name: 'tronco_rajaduras', nullable: true })
    troncoRajaduras: string;

    @Column({ name: 'ramas_horquetas', nullable: true })
    ramasHorquetas: string;

    @Column({ name: 'ramas_horqueta_con_corteza', nullable: true })
    ramasHorquetaConCorteza: string;

    @Column({ name: 'ramas_horqueta_con_defectos', nullable: true })
    ramasHorquetaConDefectos: string;

    @Column({ name: 'ramas_cancros', nullable: true })
    ramasCancros: string;

    @Column({ name: 'ramas_cavidades', nullable: true })
    ramasCavidades: string;

    @Column({ name: 'ramas_cuerpos_fructiferos_en_hongos', nullable: true })
    ramasCuerposFructiferosEnHongos: string;

    @Column({ name: 'ramas_colgantes_quebrantes', nullable: true })
    ramasColgantesQuebrantes: string;

    @Column({ name: 'ramas_muertas', nullable: true })
    ramasMuertas: boolean;

    @Column({ name: 'ramas_rajaduras', nullable: true })
    ramasRajaduras: string;

    @Column({ name: 'ramas_pudricion_de_madera', nullable: true })
    ramasPudricionDeMadera: string;

    @Column({ name: 'ramas_interferencia_electrica', nullable: true })
    ramasInterferenciaElectrica: string;

    @Column({ name: 'ramas_sobreextendidas', nullable: true })
    ramasSobreextendidas: string;
}
