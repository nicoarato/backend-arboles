import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1669064334582 implements MigrationInterface {
    name = 'initial1669064334582';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "arboles"."rol" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_c93a22388638fac311781c7f2dd" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "arboles"."user" ("id" SERIAL NOT NULL, "email" character varying NULL,"username" character varying NOT NULL, "name" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "rol_id" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "arboles"."proyecto" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_589bf061fd654da7076e68e1699" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "arboles"."arbol" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "direccion" character varying NOT NULL, "barrio" character varying NOT NULL, "manzana" character varying NOT NULL, "faltante" boolean NOT NULL, "muerto" boolean NOT NULL, "latitud" character varying NOT NULL, "longitud" character varying NOT NULL, "especie" character varying NOT NULL, "perimetro" character varying NOT NULL, "altura" character varying NOT NULL, "inclinacion" character varying NOT NULL, "forma" character varying NOT NULL, "valor_de_arbol" character varying NOT NULL, "enfermedades" character varying NOT NULL, "plagas" character varying NOT NULL, "exposicion_al_viento_dominante" boolean NOT NULL, "vigor" character varying NOT NULL, "densidad_de_copa" character varying NOT NULL, "espacio_de_crecimiento" character varying NOT NULL, "plato_radicular_o_raices_expuestas" boolean NOT NULL, "uso_bajo_el_arbol" boolean NOT NULL, "tasa_de_uso" character varying NOT NULL, "movilidad_de_blanco" boolean NOT NULL, "restriccion_de_uso" boolean NOT NULL, "defectos_en_raices" boolean NOT NULL, "raices_cuerpos_fructiferos" boolean NOT NULL, "raices_dano_mecanico" boolean NOT NULL, "raices_estrangulantes" boolean NOT NULL, "agallas_termiteros_hormigueros" character varying NOT NULL, "tronco_cancros" character varying NOT NULL, "lx_cancro_tronco" character varying NOT NULL, "tronco_cavidades" character varying NOT NULL, "t_espesor_de_pared_tronco" character varying NOT NULL, "corteza_perdida_muerta" character varying NOT NULL, "exudacion_de_savia" character varying NOT NULL, "coeficiente_de_esbeltez" character varying NOT NULL, "con_corteza_incluida" character varying NOT NULL, "con_defectos_adicionales" character varying NOT NULL, "tronco_orificios" character varying NOT NULL, "tronco_fustes_multiples" character varying NOT NULL, "tronco_heridas" character varying NOT NULL, "tronco_horquetas" boolean NOT NULL, "tronco_inclinacion" character varying NOT NULL, "tronco_pudricion_de_madera" character varying NOT NULL, "tronco_rajaduras" character varying NOT NULL, "ramas_horquetas" character varying NOT NULL, "ramas_horqueta_con_corteza" character varying NOT NULL, "ramas_horqueta_con_defectos" character varying NOT NULL, "ramas_cancros" character varying NOT NULL, "ramas_cavidades" character varying NOT NULL, "ramas_cuerpos_fructiferos_en_hongos" character varying NOT NULL, "ramas_colgantes_quebrantes" character varying NOT NULL, "ramas_muertas" boolean NOT NULL, "ramas_rajaduras" character varying NOT NULL, "ramas_pudricion_de_madera" character varying NOT NULL, "ramas_interferencia_electrica" character varying NOT NULL, "ramas_sobreextendidas" character varying NOT NULL, "proyecto_id" integer NOT NULL, CONSTRAINT "PK_954de7f4cc19c646fe68b3361aa" PRIMARY KEY ("id"))`,
        );
        await queryRunner.query(
            `CREATE TABLE "arboles"."user_proyecto" ("proyecto_id" integer NOT NULL, "user_id" integer NOT NULL, CONSTRAINT "PK_a86800f82122223e144615bd23f" PRIMARY KEY ("proyecto_id", "user_id"))`,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_ec86b96af35ff3fd4b3c5bf9aa" ON "arboles"."user_proyecto" ("proyecto_id") `,
        );
        await queryRunner.query(
            `CREATE INDEX "IDX_c60ff9be026e9e376e9dba2fdc" ON "arboles"."user_proyecto" ("user_id") `,
        );
        await queryRunner.query(
            `ALTER TABLE "arboles"."user" ADD CONSTRAINT "FK_3bea99cfa674e8767c7fbb51f8e" FOREIGN KEY ("rol_id") REFERENCES "arboles"."rol"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "arboles"."arbol" ADD CONSTRAINT "FK_00df3e183482469c1a88c28bcec" FOREIGN KEY ("proyecto_id") REFERENCES "arboles"."proyecto"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
        );
        await queryRunner.query(
            `ALTER TABLE "arboles"."user_proyecto" ADD CONSTRAINT "FK_ec86b96af35ff3fd4b3c5bf9aa1" FOREIGN KEY ("proyecto_id") REFERENCES "arboles"."proyecto"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
        await queryRunner.query(
            `ALTER TABLE "arboles"."user_proyecto" ADD CONSTRAINT "FK_c60ff9be026e9e376e9dba2fdcd" FOREIGN KEY ("user_id") REFERENCES "arboles"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "arboles"."user_proyecto" DROP CONSTRAINT "FK_c60ff9be026e9e376e9dba2fdcd"`,
        );
        await queryRunner.query(
            `ALTER TABLE "arboles"."user_proyecto" DROP CONSTRAINT "FK_ec86b96af35ff3fd4b3c5bf9aa1"`,
        );
        await queryRunner.query(
            `ALTER TABLE "arboles"."arbol" DROP CONSTRAINT "FK_00df3e183482469c1a88c28bcec"`,
        );
        await queryRunner.query(
            `ALTER TABLE "arboles"."user" DROP CONSTRAINT "FK_3bea99cfa674e8767c7fbb51f8e"`,
        );
        await queryRunner.query(
            `DROP INDEX "arboles"."IDX_c60ff9be026e9e376e9dba2fdc"`,
        );
        await queryRunner.query(
            `DROP INDEX "arboles"."IDX_ec86b96af35ff3fd4b3c5bf9aa"`,
        );
        await queryRunner.query(`DROP TABLE "arboles"."user_proyecto"`);
        await queryRunner.query(`DROP TABLE "arboles"."arbol"`);
        await queryRunner.query(`DROP TABLE "arboles"."proyecto"`);
        await queryRunner.query(`DROP TABLE "arboles"."user"`);
        await queryRunner.query(`DROP TABLE "arboles"."rol"`);
    }
}
