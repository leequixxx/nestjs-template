import {Module} from '@nestjs/common';

import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule, ConfigService} from '@nestjs/config';

import {SnakeNamingStrategy} from 'typeorm-naming-strategies';

import {User} from '../entities/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres' as 'postgres',
        host: configService.get<string>('DATABASE_HOST', '127.0.0.1'),
        port: configService.get<number>('DATABASE_PORT', 5432),
        database: configService.get<string>('DATABASE_DB'),
        username: configService.get<string>('DATABASE_USERNAME'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        synchronize: true,
        namingStrategy: new SnakeNamingStrategy(),
        entities: [User],
      }),
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
}
