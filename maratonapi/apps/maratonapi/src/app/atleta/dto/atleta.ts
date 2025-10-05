import { IsInt, IsNotEmpty, IsString, Min, Validate } from "class-validator";
import { Unique } from "typeorm";
import { AtletaEntity } from "../atleta.entity";

export class PostAtletaDTO {
  @IsNotEmpty()
  @IsInt()
  @Unique(['dni'])
  dni: number;

  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  tiempo: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  posicion: number;

  @IsNotEmpty()
  @IsInt()
  ciudadId: number;
}

export class PutAtletaDTO {
  @IsInt()
  dni?: number;

  @IsString()
  nombre?: string;

  @IsString()
  tiempo?: string;

  @IsInt()
  posicion?: number;

  @IsInt()
  ciudadId?: number;
}
