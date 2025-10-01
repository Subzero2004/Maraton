import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AtletaEntity } from "./atleta.entity";
import { Repository } from "typeorm";
import { CiudadEntity } from "../ciudad/ciudad.entity";
import { PostAtletaDTO, PutAtletaDTO } from "./dto/atleta";

@Injectable()
export class AtletaService {
  constructor(
    @InjectRepository(AtletaEntity)
    private atletaRepository: Repository<AtletaEntity>,
    @InjectRepository(CiudadEntity)
    private ciudadRepository: Repository<CiudadEntity>,
  ) {}

  async create(dto: PostAtletaDTO): Promise<AtletaEntity> {
    const ciudad = await this.ciudadRepository.findOne({ where: { id: dto.ciudadId } });
    if (!ciudad) throw new NotFoundException('Ciudad No Encontrada');

    const atleta = this.atletaRepository.create({ ...dto, ciudad });
    return this.atletaRepository.save(atleta);
  }

  async findAll(): Promise<AtletaEntity[]> {
    return this.atletaRepository.find({ relations: ['ciudad'] });
  }

  async findOne(id: number): Promise<AtletaEntity> {
    const atleta = await this.atletaRepository.findOne({
      where: { id },
      relations: ['ciudad'],
    });
    if(!atleta) throw new NotFoundException('Atleta No Encontrado');
    return atleta;
  }

  async update(id: number, dto: PutAtletaDTO): Promise<AtletaEntity> {
    const atleta = await this.findOne(id);

    if (dto.ciudadId) {
      const ciudad = await this.ciudadRepository.findOne({ where: { id: dto.ciudadId } });
      if (!ciudad) throw new NotFoundException('Ciudad No encontrada');
      atleta.ciudad = ciudad;
    }

    Object.assign(atleta, dto);
    return this.atletaRepository.save(atleta);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.atletaRepository.delete(id);
  }
}
