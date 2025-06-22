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
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Kuryer } from "./models/kuryer.model";

@ApiTags("Kuryerlar")
@Controller("kuryer")
export class KuryerController {
  constructor(private readonly kuryerService: KuryerService) {}

  @ApiOperation({ summary: "Kuryer qoshish" })
  @ApiResponse({
    status: 201,
    description: "Created Kuryer",
    type: Kuryer,
  })
  @Post()
  async createKuryer(@Body() createKuryerDto: CreateKuryerDto) {
    return this.kuryerService.createKuryer(createKuryerDto);
  }

  @ApiOperation({ summary: "Barcha kuryerlar royxati" })
  @ApiResponse({
    status: 200,
    description: "List of Kuryers",
    type: [Kuryer],
  })
  @Get()
  async getAllKuryers() {
    return this.kuryerService.getAllKuryers();
  }

  @ApiOperation({ summary: "Kuryerni id raqami boyicha olish" })
  @ApiResponse({
    status: 200,
    description: "Get Kuryer by id",
    type: Kuryer,
  })
  @Get(":id")
  async getKuryerById(@Param("id") id: number) {
    return this.kuryerService.getKuryerById(id);
  }

  @ApiOperation({ summary: "Kuryerni ochirish" })
  @ApiResponse({
    status: 201,
    description: "Deleted Kuryer",
    type: Kuryer,
  })
  @Delete(":id")
  async removeKuryerByIs(@Param("id") id: number) {
    return this.kuryerService.removeKuryerByIs(id);
  }

  @ApiOperation({ summary: "Kuryerni ozgartirish" })
  @ApiResponse({
    status: 200,
    description: "Updated Kuryer",
    type: Kuryer,
  })
  @Patch(":id")
  async updateKuryerById(
    @Param("id") id: number,
    @Body() updateKuryerDto: UpdateKuryerDto
  ) {
    return this.kuryerService.updateKuryerById(id, updateKuryerDto);
  }
}
