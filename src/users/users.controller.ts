import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Users } from "./models/user.model";

@ApiTags("Foydalanuvchilar")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Foydalanuvchi qoshish" })
  @ApiResponse({ status: 201, description: "Created User", type: Users })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUsers(createUserDto);
  }

  @ApiOperation({ summary: "Barcha foydalanuvchilar royxati" })
  @ApiResponse({ status: 200, description: "List of Users", type: [Users] })
  @Get()
  findAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Foydalanuvchini id raqami boyicha olish" })
  @ApiResponse({ status: 200, description: "Get User by id", type: Users })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.getUsersById(+id);
  }

  @ApiOperation({ summary: "Foydalanuvchini ozgartirish" })
  @ApiResponse({ status: 200, description: "Updated User", type: Users })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUserById(+id, updateUserDto);
  }

  @ApiOperation({ summary: "Foydalanuvchini ochirish" })
  @ApiResponse({ status: 201, description: "Deleted User", type: Users })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.removeUsersByIs(+id);
  }
}
