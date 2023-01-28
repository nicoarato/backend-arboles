import { Module, forwardRef } from '@nestjs/common';
import { ProyectoController } from './controllers/proyecto.controller';
import { ProyectoService } from './services/proyecto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './entities/proyecto.entity';
import { UserModule } from '../user/user.module';
import { ArbolModule } from './../arbol/arbol.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Proyecto]),
        UserModule,
        forwardRef(() => ArbolModule),
    ],
    controllers: [ProyectoController],
    providers: [ProyectoService],
    exports: [TypeOrmModule.forFeature([Proyecto]), ProyectoService],
})
export class ProyectoModule {}
