import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DonationsService } from "./donations.service";
import { CreateDonationDto } from "./dto/create-donation.dto";
import { UpdateDonationDto } from "./dto/update-donation.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Donation } from "./models/donation.model";

@ApiTags("Xayriya")
@Controller("donations")
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @ApiOperation({ summary: "Xayriya qoshish" })
  @ApiResponse({
    status: 201,
    description: "Created Donation",
    type: Donation,
  })
  @Post()
  create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationsService.create(createDonationDto);
  }

  @ApiOperation({ summary: "Barcha xayriyalar royxati" })
  @ApiResponse({
    status: 200,
    description: "List of Donations",
    type: [Donation],
  })
  @Get()
  findAll() {
    return this.donationsService.findAll();
  }

  @ApiOperation({ summary: "Xayriyani id raqami boyicha olish" })
  @ApiResponse({
    status: 200,
    description: "Get Donation by id",
    type: Donation,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.donationsService.findOne(+id);
  }

  @ApiOperation({ summary: "Xayriyani ozgartirish" })
  @ApiResponse({
    status: 200,
    description: "Updated Donation",
    type: Donation,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDonationDto: UpdateDonationDto
  ) {
    return this.donationsService.update(+id, updateDonationDto);
  }

  @ApiOperation({ summary: "Xayriyani ochirish" })
  @ApiResponse({
    status: 201,
    description: "Deleted Donation",
    type: Donation,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.donationsService.remove(+id);
  }
}
