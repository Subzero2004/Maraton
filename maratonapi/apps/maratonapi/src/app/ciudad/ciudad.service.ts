import { Injectable, NotFoundException } from "@nestjs/common";
import { CiudadEntity } from "./ciudad.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PostCiudadDTO, PutCiudadDTO } from "./dto/ciudad";

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(CiudadEntity)
    private readonly ciudadRepository: Repository<CiudadEntity>,
  ) {}

  async create(dto: PostCiudadDTO): Promise<CiudadEntity> {
    const ciudad = this.ciudadRepository.create(dto);
    return this.ciudadRepository.save(ciudad);
  }

  async findAll(): Promise<CiudadEntity[]> {
    return this.ciudadRepository.find({ relations: ['atletas'] });
  }

  async findOne(id: number): Promise<CiudadEntity> {
    const ciudad = await this.ciudadRepository.findOne({
      where: { id },
      relations: ['atletas'],
    });
    if (!ciudad) throw new NotFoundException('Ciudad No Encontrada');
    return ciudad;
  }

  async update(id: number, dto: PutCiudadDTO): Promise<CiudadEntity> {
    await this.findOne(id);
    await this.ciudadRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.ciudadRepository.delete(id);
  }
}
