import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/entity/user.entity';
import { AuthModule } from './modules/auth/auth.module';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ArbolController } from './modules/arbol/controllers/arbol.controller';
import { ArbolModule } from './modules/arbol/arbol.module';
import { ProyectoModule } from './modules/proyecto/proyecto.module';
import { FileModule } from './modules/file/file.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        AuthModule,
        UserModule,
        ProyectoModule,
        ArbolModule,
        DatabaseModule,
        FileModule,
        RouterModule.register([
            {
                path: 'auth',
                module: AuthModule,
            },
            {
                path: 'arbol',
                module: ArbolModule,
            },
            {
                path: 'proyecto',
                module: ProyectoModule,
            },
            {
                path: 'user',
                module: UserModule,
            },
            {
                path: 'file',
                module: FileModule,
            },
        ]),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
