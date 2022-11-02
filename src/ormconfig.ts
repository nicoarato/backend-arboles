import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { EnvVars } from './config-loader';

config();

const configService = new ConfigService();

const AppDataSource = new DataSource({
    type: 'postgres',
    host: configService.get(EnvVars.dbHost),
    port: configService.get(EnvVars.dbPort),
    username: configService.get(EnvVars.dbUser),
    password: configService.get(EnvVars.dbPassword),
    database: configService.get(EnvVars.dbDatabase),
    schema: configService.get(EnvVars.dbSchema),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
});
export default AppDataSource;
