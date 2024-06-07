import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { File } from './entities/file.entity';
import { FileController } from './controllers/file.controller';
import { FileService } from './services/file.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        TypeOrmModule.forFeature([File]),
        UserModule,
        MulterModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                dest: configService.get<string>('FILES_LOCATION'),
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [FileController],
    providers: [FileService],
    exports: [TypeOrmModule.forFeature([File]), FileService],
})
export class FileModule {}
