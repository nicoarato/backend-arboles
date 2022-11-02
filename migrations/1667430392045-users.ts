import { MigrationInterface, QueryRunner } from "typeorm";

export class users1667430392045 implements MigrationInterface {
    name = 'users1667430392045'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "arboles"."rol" ("id" SERIAL NOT NULL, "descripcion" character varying NOT NULL, CONSTRAINT "PK_c93a22388638fac311781c7f2dd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "arboles"."user" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "nombre" character varying NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "rol_id" integer NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "arboles"."user" ADD CONSTRAINT "FK_3bea99cfa674e8767c7fbb51f8e" FOREIGN KEY ("rol_id") REFERENCES "arboles"."rol"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "arboles"."user" DROP CONSTRAINT "FK_3bea99cfa674e8767c7fbb51f8e"`);
        await queryRunner.query(`DROP TABLE "arboles"."user"`);
        await queryRunner.query(`DROP TABLE "arboles"."rol"`);
    }

}
