import { forwardRef, Module } from '@nestjs/common';
import { ArbolController } from './controllers/arbol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arbol } from './entities/arbol.entity';
import { Proyecto } from '../proyecto/entities/proyecto.entity';
import { UserModule } from '../user/user.module';
import { ArbolService } from './services/arbol.service';
import { ProyectoModule } from '../proyecto/proyecto.module';
import { ExportArbolService } from './services/export-arbol.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Arbol]),
        UserModule,
        forwardRef(() => ProyectoModule),
    ],
    controllers: [ArbolController],
    providers: [ArbolService, ExportArbolService],
    exports: [
        TypeOrmModule.forFeature([Arbol, Proyecto]),
        ArbolService,
        ExportArbolService,
    ],
})
export class ArbolModule {}
