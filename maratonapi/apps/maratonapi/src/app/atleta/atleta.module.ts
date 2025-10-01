import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AtletaEntity } from "./atleta.entity";
import { CiudadEntity } from "../ciudad/ciudad.entity";
import { AtletaController } from "./atleta.controller";
import { AtletaService } from "./atleta.service";

@Module({
  imports: [TypeOrmModule.forFeature([AtletaEntity, CiudadEntity])],
  controllers: [AtletaController],
  providers: [AtletaService],
})
export class AtletaModule {}
