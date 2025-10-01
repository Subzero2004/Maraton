import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AtletaService } from "../atleta/atleta.service";
import { PostAtletaDTO, PutAtletaDTO } from "../atleta/dto/atleta";

@Controller('atletas')
export class AtletaController {
  constructor(private readonly atletaService: AtletaService) {}

  @Post()
  create(@Body() dto: PostAtletaDTO) {
    return this.atletaService.create(dto);
  }

  @Get()
  findAll() {
    return this.atletaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.atletaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: PutAtletaDTO) {
    return this.atletaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.atletaService.remove(id);
  }
}
