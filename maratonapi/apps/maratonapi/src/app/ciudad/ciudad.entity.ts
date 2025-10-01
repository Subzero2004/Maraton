import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AtletaEntity } from "../atleta/atleta.entity";

@Entity()
export class CiudadEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => AtletaEntity, (atleta) => atleta.ciudad)
  atletas: AtletaEntity[];
}
