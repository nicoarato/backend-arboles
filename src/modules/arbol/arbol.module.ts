import { forwardRef, Module } from '@nestjs/common';
import { ArbolController } from './controllers/arbol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arbol } from './entities/arbol.entity';
import { UserModule } from '../user/user.module';
import { ArbolService } from './services/arbol.service';
import { ProyectoModule } from '../proyecto/proyecto.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Arbol]),
        UserModule,
        forwardRef(() => ProyectoModule),
    ],
    controllers: [ArbolController],
    providers: [ArbolService],
    exports: [TypeOrmModule.forFeature([Arbol]), ArbolService],
})
export class ArbolModule {}
