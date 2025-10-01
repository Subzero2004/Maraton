import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CiudadService } from "./ciudad.service";
import { PostCiudadDTO, PutCiudadDTO } from "./dto/ciudad";

@Controller('ciudades')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Post()
  create(@Body() dto: PostCiudadDTO) {
    return this.ciudadService.create(dto);
  }

  @Get()
  findAll() {
    return this.ciudadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ciudadService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: PutCiudadDTO) {
    return this.ciudadService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ciudadService.remove(id);
  }
}
