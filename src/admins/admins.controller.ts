import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from "@nestjs/common";
import { AdminsService } from "./admins.service";
import { CreateAdminsDto } from "./dto/create-admins.dto";
import { UpdateAdminsDto } from "./dto/update-admins.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Admins } from "./models/admins.model";

@ApiTags("Adminlar")
@Controller("admins")
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @ApiOperation({ summary: "Admin qoshish" })
  @ApiResponse({
    status: 201,
    description: "Created Admin",
    type: Admins,
  })
  @Post()
  create(@Body() createAdminDto: CreateAdminsDto) {
    return this.adminsService.createAdmins(createAdminDto);
  }
  @ApiOperation({ summary: "Barcha adminlar royxati" })
  @ApiResponse({
    status: 200,
    description: "List of Admins",
    type: [Admins],
  })
  @Get()
  findAll() {
    return this.adminsService.getAllAdminss();
  }
  @ApiOperation({ summary: "Adminni id raqami boyicha olish" })
  @ApiResponse({
    status: 200,
    description: "Get Admin by id",
    type: Admins,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.adminsService.getAdminsById(+id);
  }

  // @Get("email/:email")
  // getAdminByEmail(@Param("email") email: string) {
  //   return this.adminsService.findOne(email);
  // }
  @ApiOperation({ summary: "Adminni ozgartirish" })
  @ApiResponse({
    status: 200,
    description: "Updated Admin",
    type: Admins,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminsDto) {
    return this.adminsService.updateAdminsById(+id, updateAdminDto);
  }
  @ApiOperation({ summary: "Adminni ochirish" })
  @ApiResponse({
    status: 201,
    description: "Deleted Admin",
    type: Admins,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.adminsService.removeAdminsByIs(+id);
  }
}
