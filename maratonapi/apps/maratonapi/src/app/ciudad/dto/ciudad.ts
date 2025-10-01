import { IsNotEmpty, IsString } from "class-validator";

export class PostCiudadDTO {
  @IsNotEmpty()
  @IsString()
  nombre: string;
}

export class PutCiudadDTO {
  @IsString()
  nombre?: string;
}
