import { Module, forwardRef } from '@nestjs/common';
import { ProyectoController } from './controllers/proyecto.controller';
import { ProyectoService } from './services/proyecto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { UserModule } from '../user/user.module';
import { ArbolModule } from './../arbol/arbol.module';
import { FileModule } from '../file/file.module';
import { File } from '../file/entities/file.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Proyecto, File]),
        UserModule,
        FileModule,
        forwardRef(() => ArbolModule),
    ],
    controllers: [ProyectoController],
    providers: [ProyectoService],
    exports: [TypeOrmModule.forFeature([Proyecto]), ProyectoService],
})
export class ProyectoModule {}
