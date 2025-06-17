import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { SocialService } from "./social.service";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";

@Controller("social")
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @Post()
  async createSocial(@Body() createSocialDto: CreateSocialDto) {
    return this.socialService.createSocial(createSocialDto);
  }

  @Get()
  async getAllSocials() {
    return this.socialService.getAllSocials();
  }
  @Get(":id")
  async getSocialById(@Param("id") id: number) {
    return this.socialService.getSocialById(id);
  }
  @Delete(":id")
  async removeSocialByIs(@Param("id") id: number) {
    return this.socialService.removeSocialByIs(id);
  }
  @Patch(":id")
  async updateSocialById(
    @Param("id") id: number,
    @Body() updateSocialDto: UpdateSocialDto
  ) {
    return this.socialService.updateSocialById(id, updateSocialDto);
  }
}
