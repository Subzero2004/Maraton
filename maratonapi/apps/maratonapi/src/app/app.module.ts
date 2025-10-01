import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtletaModule } from './atleta/atleta.module';
import { CiudadModule } from './ciudad/ciudad.module';

@Module({
  imports:
  [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'maraton_user',
      password: 'maraton_password',
      database: 'db_maraton',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AtletaModule,
    CiudadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
