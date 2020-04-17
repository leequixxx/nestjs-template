import {Module} from '@nestjs/common';

import {ConfigModule} from '@nestjs/config';

import {DatabaseModule} from './database.module';
import {UsersModule} from './users.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    DatabaseModule,
    UsersModule,
  ],
})
export class AppModule {
}
