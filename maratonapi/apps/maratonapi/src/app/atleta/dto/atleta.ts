import { IsIn, IsInt, isNotEmpty, IsNotEmpty, isString, IsString, Min } from "class-validator";

export class PostAtletaDTO {
  @IsNotEmpty()
  @IsInt()
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
