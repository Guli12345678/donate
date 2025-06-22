import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from "class-validator";

export class CreateDonationDto {
  @ApiProperty({
    example: 1,
    description: "Supporter ID raqami",
  })
  @IsNumber()
  @IsNotEmpty()
  supporterId: number;

  @ApiProperty({
    example: 2,
    description: "Creator ID raqami",
  })
  @IsNumber()
  @IsNotEmpty()
  creatorId: number;

  @ApiProperty({
    example: 100000,
    description: "Donation amount",
  })
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  amount: number;

  @ApiProperty({
    example: "Good job!",
    description: "Donation message",
  })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    example: "click",
    description: "To'lov usuli",
    enum: ["click", "uzum", "payme", "uzcard", "humo"],
  })
  @IsEnum(["click", "uzum", "payme", "uzcard", "humo"])
  @IsNotEmpty()
  payment_method: string;

  @ApiProperty({
    example: false,
    description: "Anonim xayriya",
  })
  @IsBoolean()
  is_anonymous: boolean;
}
