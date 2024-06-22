import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Arbol } from '../entities/arbol.entity';
import { createObjectCsvWriter } from 'csv-writer';
import { join } from 'path';

@Injectable()
export class ExportArbolService {
    constructor(
        @InjectRepository(Arbol)
        private readonly arbolRepository: Repository<Arbol>,
    ) {}

    async exportToCSV(proyectoId: number): Promise<string> {
        const arboles = await this.arbolRepository.find({
            where: { proyecto: { id: proyectoId } },
            relations: ['proyecto'], // Incluir las relaciones necesarias
        });

        const csvWriter = createObjectCsvWriter({
            path: join(__dirname, '../../../exports/arboles.csv'), // Ruta del archivo CSV
            header: [
                { id: 'id', title: 'ID' },
                { id: 'nombre', title: 'Nombre' },
                { id: 'proyectoId', title: 'Proyecto ID' },
                { id: 'direccion', title: 'Direccion' },
                { id: 'barrio', title: 'Barrio' },
                { id: 'manzana', title: 'Manzana' },
                { id: 'latitud', title: 'Latitud' },
                { id: 'longitud', title: 'Longitud' },
                { id: 'faltante', title: 'Faltante' },
                { id: 'muerto', title: 'Muerto' },
                { id: 'especie', title: 'Especie' },
                { id: 'perimetro', title: 'Perimetro' },
                { id: 'altura', title: 'Altura' },
                { id: 'inclinacion', title: 'Inclinacion' },
                { id: 'forma', title: 'Forma' },
                { id: 'valor_del_arbol', title: 'Valor del arbol' },
                { id: 'enfermedades', title: 'Enfermedades' },
                { id: 'plagas', title: 'Plagas' },
                {
                    id: 'exposicion_al_viento_dominante',
                    title: 'Exposion al viento dominante',
                },
                { id: 'vigor', title: 'Vigor' },
                { id: 'densidad_de_copa', title: 'Densidad de copa' },
                {
                    id: 'espacio_de_crecimiento',
                    title: 'Espacio de crecimiento',
                },
                {
                    id: 'plato_radicular_o_raices_expuestas',
                    title: 'Plato radicular o raices expuestas',
                },
                { id: 'uso_bajo_el_arbol', title: 'Uso bajo el arbol' },
                { id: 'tasa_de_uso', title: 'Tasa de uso' },
                { id: 'movilidad_de_blanco', title: 'Movilidad de blanco' },
                { id: 'restriccion_de_uso', title: 'Restriccion de uso' },
                { id: 'defectos_en_raices', title: 'Defectos en raices' },
                {
                    id: 'raices_cuerpos_fructiferos',
                    title: 'Raices cuerpos fructiferos',
                },
                { id: 'raices_dano_mecanico', title: 'Raices dano mecanico' },
                { id: 'raices_estrangulantes', title: 'Raices estrangulantes' },
                {
                    id: 'agallas_termiteros_hormigueros',
                    title: 'Agallas termiteros hormigueros',
                },
                { id: 'tronco_cancros', title: 'Tronco cancros' },
                { id: 'lx_cancro_tronco', title: 'LX cancro en tronco' },
                { id: 'tronco_cavidades', title: 'Tronco cavidades' },
                {
                    id: 't_espesor_de_pared_tronco',
                    title: 'Tronco T de espesor de pared',
                },
                {
                    id: 'corteza_perdida_muerta',
                    title: 'Corteza perdida muerta',
                },
                { id: 'exudacion_de_savia', title: 'Exudacion de savia' },
                { id: 'coeficiente_de_esbeltez', title: 'Coef de esbeltez' },
                { id: 'con_corteza_incluida', title: 'Con corteza incluida' },
                {
                    id: 'con_defectos_adicionales',
                    title: 'Con defectos adicionales',
                },
                { id: 'tronco_orificios', title: 'Tronco orificios' },
                {
                    id: 'tronco_fustes_multiples',
                    title: 'Tronco fustes multiples',
                },
                { id: 'tronco_heridas', title: 'Tronco heridas' },
                { id: 'tronco_horquetas', title: 'Tronco horquetas' },
                { id: 'tronco_inclinacion', title: 'Tronco inclinacion' },
                {
                    id: 'tronco_pudricion_de_madera',
                    title: 'Tronco pudricion de madera',
                },
                { id: 'tronco_rajaduras', title: 'Tronco rajaduras' },
                { id: 'ramas_horquetas', title: 'Ramas horquetas' },
                {
                    id: 'ramas_horqueta_con_corteza',
                    title: 'Ramas horquetas con corteza',
                },
                {
                    id: 'ramas_horqueta_con_defectos',
                    title: 'Ramas horquetas con defectos',
                },
                { id: 'ramas_cancros', title: 'Ramas cancros' },
                { id: 'ramas_cavidades', title: 'Ramas cavidades' },
                {
                    id: 'ramas_cuerpos_fructiferos_en_hongos',
                    title: 'Ramas cuerpos fructiferos en hongos',
                },
                {
                    id: 'ramas_colgantes_quebrantes',
                    title: 'Ramas colgantes quebrantes',
                },
                { id: 'ramas_muertas', title: 'Ramas muertas' },
                { id: 'ramas_rajaduras', title: 'Ramas con rajaduras' },
                {
                    id: 'ramas_pudricion_de_madera',
                    title: 'Ramas con pudricion de madera',
                },
                {
                    id: 'ramas_interferencia_electrica',
                    title: 'Ramas con interferencia electrica',
                },
                { id: 'ramas_sobreextendidas', title: 'Ramas sobreextendidas' },

                // Agrega otros campos según sea necesario
            ],
        });

        const records = arboles.map((arbol) => ({
            id: arbol.id,
            nombre: arbol.nombre,
            proyectoId: arbol.proyecto.id,
            direccion: arbol.direccion,
            barrio: arbol.barrio,
            manzana: arbol.manzana,
            latitud: arbol.latitud,
            longitud: arbol.longitud,
            faltante: arbol.faltante,
            muerto: arbol.muerto,
            especie: arbol.especie,
            perimetro: arbol.perimetro,
            altura: arbol.altura,
            inclinacion: arbol.inclinacion,
            forma: arbol.forma,
            valor_del_arbol: arbol.valorDeArbol,
            enfermedades: arbol.enfermedades,
            plagas: arbol.plagas,
            exposicion_al_viento_dominante: arbol.exposicionAlVientoDominante,
            vigor: arbol.vigor,
            densidad_de_copa: arbol.densidadDeCopa,
            espacio_de_crecimiento: arbol.espacioDeCrecimiento,
            plato_radicular_o_raices_expuestas:
                arbol.platoRadicularORaicesExpuestas,
            uso_bajo_el_arbol: arbol.usoBajoElArbol,
            tasa_de_uso: arbol.tasaDeUso,
            movilidad_de_blanco: arbol.movilidadDeBlanco,
            restriccion_de_uso: arbol.restriccionDeUso,
            defectos_en_raices: arbol.defectosEnRaices,
            raices_cuerpos_fructiferos: arbol.raicesCuerposFructiferos,
            raices_dano_mecanico: arbol.raicesDanoMecanico,
            raices_estrangulantes: arbol.raicesEstrangulantes,
            agallas_termiteros_hormigueros: arbol.agallasTermiterosHormigueros,
            tronco_cancros: arbol.troncoCancros,
            lx_cancro_tronco: arbol.lxCancroTronco,
            tronco_cavidades: arbol.troncoCavidades,
            t_espesor_de_pared_tronco: arbol.tEspesorDeParedTronco,
            corteza_perdida_muerta: arbol.cortezaPerdidaMuerta,
            exudacion_de_savia: arbol.exudacionDeSavia,
            coeficiente_de_esbeltez: arbol.coeficienteDeEsbeltez,
            con_corteza_incluida: arbol.conCortezaIncluida,
            con_defectos_adicionales: arbol.conDefectosAdicionales,
            tronco_orificios: arbol.troncoOrificios,
            tronco_fustes_multiples: arbol.troncoFustesMultiples,
            tronco_heridas: arbol.troncoHeridas,
            tronco_horquetas: arbol.troncoHorquetas,
            tronco_inclinacion: arbol.troncoInclinacion,
            tronco_pudricion_de_madera: arbol.troncoPudricionDeMadera,
            tronco_rajaduras: arbol.troncoRajaduras,
            ramas_horquetas: arbol.ramasHorquetas,
            ramas_horqueta_con_corteza: arbol.ramasHorquetaConCorteza,
            ramas_horqueta_con_defectos: arbol.ramasHorquetaConDefectos,
            ramas_cancros: arbol.ramasCancros,
            ramas_cavidades: arbol.ramasCavidades,
            ramas_cuerpos_fructiferos_en_hongos:
                arbol.ramasCuerposFructiferosEnHongos,
            ramas_colgantes_quebrantes: arbol.ramasColgantesQuebrantes,
            ramas_muertas: arbol.ramasMuertas,
            ramas_rajaduras: arbol.ramasRajaduras,
            ramas_pudricion_de_madera: arbol.ramasPudricionDeMadera,
            ramas_interferencia_electrica: arbol.ramasInterferenciaElectrica,
            ramas_sobreextendidas: arbol.ramasSobreextendidas,
            // Agrega otros campos según sea necesario
        }));

        await csvWriter.writeRecords(records);

        return join(__dirname, '../../../exports/arboles.csv');
    }
}
