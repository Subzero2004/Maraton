import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CiudadEntity } from "../ciudad/ciudad.entity";

@Entity('atleta')
export class AtletaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int'})
  dni: number;

  @Column()
  nombre: string;

  @Column()
  tiempo: string;

  @Column({ type: 'int'})
  posicion: number;

  @Column({ type: 'int'})
  ciudadId: number;

  @ManyToOne(() => CiudadEntity, (ciudad) => ciudad.atletas, {eager: true})
  @JoinColumn({ name: 'ciudadId'})
  ciudad: CiudadEntity
}
