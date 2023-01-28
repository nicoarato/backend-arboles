import { MigrationInterface, QueryRunner } from 'typeorm';
import { UsersService } from '../src/modules/user/services/user.service';

export class adminuser1669064334583 implements MigrationInterface {
    name = 'adminuser1669064334583';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `INSERT INTO "arboles"."rol" (id, description) VALUES (1,'Administrador')`,
        );
        await queryRunner.query(
            `INSERT INTO "arboles"."rol" (id, description) VALUES (2,'Inspector')`,
        );
        await queryRunner.query(
            `INSERT INTO "arboles"."user" (username, name, password, rol_id) VALUES ('admin', 'Administrador', '$2b$10$liLvGWmoPruS3pm4wDOcReutxsGsVmUxfiolGVx3Zv0TtzsNdS9Km', 1)`,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
