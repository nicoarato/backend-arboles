import { MigrationInterface, QueryRunner } from "typeorm";

export class projects1667693757396 implements MigrationInterface {
    name = 'projects1667693757396'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "arboles"."rol" RENAME COLUMN "descripcion" TO "description"`);
        await queryRunner.query(`ALTER TABLE "arboles"."user" RENAME COLUMN "nombre" TO "name"`);
        await queryRunner.query(`CREATE TABLE "arboles"."proyecto" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_589bf061fd654da7076e68e1699" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "arboles"."arbol" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fecha_inicio_relevamiento" TIMESTAMP NOT NULL, "direccion" character varying NOT NULL, "barrio" character varying NOT NULL, "manzana" character varying NOT NULL, "faltante" character varying NOT NULL, "muerto" character varying NOT NULL, "direccion_sitio" character varying NOT NULL, "gps" character varying NOT NULL, "especie" character varying NOT NULL, "perimetro" character varying NOT NULL, "altura" integer NOT NULL, "inclinacion" integer NOT NULL, "forma" character varying NOT NULL, "valor_de_arbol" character varying NOT NULL, "enfermedades" character varying NOT NULL, "plagas" character varying NOT NULL, "exposicion_de_carga" character varying NOT NULL, "vigor" character varying NOT NULL, "densidad_de_copa" character varying NOT NULL, "espacio_de_crecimiento" character varying NOT NULL, "plato_radicular" character varying NOT NULL, "uso_bajo_el_arbol" character varying NOT NULL, "tasa_de_uso" character varying NOT NULL, "movilidad_de_blanco" character varying NOT NULL, "restriccion_de_uso" character varying NOT NULL, "sin_defectos" character varying NOT NULL, "sin_determinar" character varying NOT NULL, "sintomas_de_enfermedad_en_copa" character varying NOT NULL, "cuerpos_fructiferos" character varying NOT NULL, "dano_mecanico_en_raices" character varying NOT NULL, "dano_mecanico_en_raices_de_base" character varying NOT NULL, "raices_muertas" character varying NOT NULL, "agallas_termiteros_tormigueros" character varying NOT NULL, "cancros_tronco" character varying NOT NULL, "cavidades_tronco" character varying NOT NULL, "cortezaPerdida_muerta" character varying NOT NULL, "exudacion_de_savia" character varying NOT NULL, "fustes_multiples" character varying NOT NULL, "heridas_tronco" character varying NOT NULL, "horquetas_tronco" character varying NOT NULL, "con_corteza_incluida" character varying NOT NULL, "con_defectos_adicionales" character varying NOT NULL, "inclinacion_tronco" character varying NOT NULL, "orificios_tronco" character varying NOT NULL, "pudricion_de_madera_tronco" character varying NOT NULL, "rajaduras_tronco" character varying NOT NULL, "horquetas_ramas" character varying NOT NULL, "horqueta_con_corteza" character varying NOT NULL, "horqueta_con_defectos" character varying NOT NULL, "cancros_ramas" character varying NOT NULL, "cavidades_ramas" character varying NOT NULL, "cuerpos_fructiferos_en_hongos" character varying NOT NULL, "ramas_colgantes_quebrantes" character varying NOT NULL, "ramas_muertas" character varying NOT NULL, "rajaduras_ramas" character varying NOT NULL, "pudricion_de_dadera_ramas" character varying NOT NULL, "interferencia_electrica" character varying NOT NULL, "ramas_sobreextendidas" character varying NOT NULL, "proyecto_id" integer NOT NULL, CONSTRAINT "PK_954de7f4cc19c646fe68b3361aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "arboles"."user_proyecto" ("proyecto_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_a86800f82122223e144615bd23f" PRIMARY KEY ("proyecto_id", "user_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ec86b96af35ff3fd4b3c5bf9aa" ON "arboles"."user_proyecto" ("proyecto_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_c60ff9be026e9e376e9dba2fdc" ON "arboles"."user_proyecto" ("user_id") `);
        await queryRunner.query(`ALTER TABLE "arboles"."arbol" ADD CONSTRAINT "FK_00df3e183482469c1a88c28bcec" FOREIGN KEY ("proyecto_id") REFERENCES "arboles"."proyecto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "arboles"."user_proyecto" ADD CONSTRAINT "FK_ec86b96af35ff3fd4b3c5bf9aa1" FOREIGN KEY ("proyecto_id") REFERENCES "arboles"."proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "arboles"."user_proyecto" ADD CONSTRAINT "FK_c60ff9be026e9e376e9dba2fdcd" FOREIGN KEY ("user_id") REFERENCES "arboles"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "arboles"."user_proyecto" DROP CONSTRAINT "FK_c60ff9be026e9e376e9dba2fdcd"`);
        await queryRunner.query(`ALTER TABLE "arboles"."user_proyecto" DROP CONSTRAINT "FK_ec86b96af35ff3fd4b3c5bf9aa1"`);
        await queryRunner.query(`ALTER TABLE "arboles"."arbol" DROP CONSTRAINT "FK_00df3e183482469c1a88c28bcec"`);
        await queryRunner.query(`DROP INDEX "arboles"."IDX_c60ff9be026e9e376e9dba2fdc"`);
        await queryRunner.query(`DROP INDEX "arboles"."IDX_ec86b96af35ff3fd4b3c5bf9aa"`);
        await queryRunner.query(`DROP TABLE "arboles"."user_proyecto"`);
        await queryRunner.query(`DROP TABLE "arboles"."arbol"`);
        await queryRunner.query(`DROP TABLE "arboles"."proyecto"`);
        await queryRunner.query(`ALTER TABLE "arboles"."user" RENAME COLUMN "name" TO "nombre"`);
        await queryRunner.query(`ALTER TABLE "arboles"."rol" RENAME COLUMN "description" TO "descripcion"`);
    }

}
