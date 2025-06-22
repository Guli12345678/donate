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
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Social } from "./models/social.model";

@ApiTags("Ijtimoiy tarmoqlar")
@Controller("social")
export class SocialController {
  constructor(private readonly socialService: SocialService) {}

  @ApiOperation({ summary: "Ijtimoiy tarmoq qoshish" })
  @ApiResponse({ status: 201, description: "Created Social", type: Social })
  @Post()
  async createSocial(@Body() createSocialDto: CreateSocialDto) {
    return this.socialService.createSocial(createSocialDto);
  }

  @ApiOperation({ summary: "Barcha ijtimoiy tarmoqlar royxati" })
  @ApiResponse({ status: 200, description: "List of Socials", type: [Social] })
  @Get()
  async getAllSocials() {
    return this.socialService.getAllSocials();
  }
  @ApiOperation({ summary: "Ijtimoiy tarmoqni id raqami boyicha olish" })
  @ApiResponse({ status: 200, description: "Get Social by id", type: Social })
  @Get(":id")
  async getSocialById(@Param("id") id: number) {
    return this.socialService.getSocialById(id);
  }
  @ApiOperation({ summary: "Ijtimoiy tarmoqni ochirish" })
  @ApiResponse({ status: 201, description: "Deleted Social", type: Social })
  @Delete(":id")
  async removeSocialByIs(@Param("id") id: number) {
    return this.socialService.removeSocialByIs(id);
  }
  @ApiOperation({ summary: "Ijtimoiy tarmoqni ozgartirish" })
  @ApiResponse({ status: 200, description: "Updated Social", type: Social })
  @Patch(":id")
  async updateSocialById(
    @Param("id") id: number,
    @Body() updateSocialDto: UpdateSocialDto
  ) {
    return this.socialService.updateSocialById(id, updateSocialDto);
  }
}
