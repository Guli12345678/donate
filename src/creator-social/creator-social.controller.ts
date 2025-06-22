import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CreatorSocialService } from "./creator-social.service";
import { CreateCreatorSocialDto } from "./dto/create-creator-social.dto";
import { UpdateCreatorSocialDto } from "./dto/update-creator-social.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatorSocial } from "./models/creator-social.model";

@ApiTags("Ijodkor ijtimoiy tarmoqlari")
@Controller("creator-social")
export class CreatorSocialController {
  constructor(private readonly creatorSocialService: CreatorSocialService) {}

  @ApiOperation({ summary: "Ijodkor ijtimoiy tarmogini qoshish" })
  @ApiResponse({
    status: 201,
    description: "Created Creator Social",
    type: CreatorSocial,
  })
  @Post()
  create(@Body() createCreatorSocialDto: CreateCreatorSocialDto) {
    return this.creatorSocialService.create(createCreatorSocialDto);
  }

  @ApiOperation({ summary: "Barcha ijodkor ijtimoiy tarmoqlari royxati" })
  @ApiResponse({
    status: 200,
    description: "List of Creator Socials",
    type: [CreatorSocial],
  })
  @Get()
  findAll() {
    return this.creatorSocialService.findAll();
  }

  @ApiOperation({
    summary: "Ijodkor ijtimoiy tarmogini id raqami boyicha olish",
  })
  @ApiResponse({
    status: 200,
    description: "Get Creator Social by id",
    type: CreatorSocial,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.creatorSocialService.findOne(+id);
  }

  @ApiOperation({ summary: "Ijodkor ijtimoiy tarmogini ozgartirish" })
  @ApiResponse({
    status: 200,
    description: "Updated Creator Social",
    type: CreatorSocial,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCreatorSocialDto: UpdateCreatorSocialDto
  ) {
    return this.creatorSocialService.update(+id, updateCreatorSocialDto);
  }

  @ApiOperation({ summary: "Ijodkor ijtimoiy tarmogini ochirish" })
  @ApiResponse({
    status: 201,
    description: "Deleted Creator Social",
    type: CreatorSocial,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.creatorSocialService.remove(+id);
  }
}
