import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { AdminsService } from "./admins.service";
import { CreateAdminsDto } from "./dto/create-admins.dto";
import { UpdateAdminsDto } from "./dto/update-admins.dto";

@Controller("admins")
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  async createAdmins(@Body() createAdminsDto: CreateAdminsDto) {
    return this.adminsService.createAdmins(createAdminsDto);
  }

  @Get()
  async getAllAdminss() {
    return this.adminsService.getAllAdminss();
  }
  @Get(":id")
  async getAdminsById(@Param("id") id: number) {
    return this.adminsService.getAdminsById(id);
  }
  @Delete(":id")
  async removeAdminsByIs(@Param("id") id: number) {
    return this.adminsService.removeAdminsByIs(id);
  }
  @Patch(":id")
  async updateAdminsById(
    @Param("id") id: number,
    @Body() updateAdminsDto: UpdateAdminsDto
  ) {
    return this.adminsService.updateAdminsById(id, updateAdminsDto);
  }
}
