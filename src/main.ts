import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './interceptors/transform.interceptor';
import { AppExceptionFilter } from './filters/app-exception.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const reflector = app.get<Reflector>(Reflector);

    app.useGlobalInterceptors(new TransformInterceptor(reflector));
    app.useGlobalFilters(new AppExceptionFilter());

    app.enableCors();
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            transformOptions: { enableImplicitConversion: true },
            always: true,
            // whitelist: true,
            strictGroups: true,
        }),
    );

    const config = new DocumentBuilder()
        .setTitle('Project TRAPP')
        .setDescription('API Rest TRAPP description')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
