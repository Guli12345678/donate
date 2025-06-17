import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { KuryerService } from "./kuryer.service";
import { CreateKuryerDto } from "./dto/create-kuryer.dto";
import { UpdateKuryerDto } from "./dto/update-kuryer.dto";

@Controller("kuryer")
export class KuryerController {
  constructor(private readonly kuryerService: KuryerService) {}

  @Post()
  async createKuryer(@Body() createKuryerDto: CreateKuryerDto) {
    return this.kuryerService.createKuryer(createKuryerDto);
  }

  @Get()
  async getAllKuryers() {
    return this.kuryerService.getAllKuryers();
  }
  @Get(":id")
  async getKuryerById(@Param("id") id: number) {
    return this.kuryerService.getKuryerById(id);
  }
  @Delete(":id")
  async removeKuryerByIs(@Param("id") id: number) {
    return this.kuryerService.removeKuryerByIs(id);
  }
  @Patch(":id")
  async updateKuryerById(
    @Param("id") id: number,
    @Body() updateKuryerDto: UpdateKuryerDto
  ) {
    return this.kuryerService.updateKuryerById(id, updateKuryerDto);
  }
}
