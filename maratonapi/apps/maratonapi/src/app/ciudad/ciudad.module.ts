import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CiudadEntity } from "./ciudad.entity";
import { CiudadController } from "./ciudad.controller";
import { CiudadService } from "./ciudad.service";

@Module({
  imports: [TypeOrmModule.forFeature([CiudadEntity])],
  controllers: [CiudadController],
  providers: [CiudadService],
  exports: [TypeOrmModule],
})
export class CiudadModule {}
