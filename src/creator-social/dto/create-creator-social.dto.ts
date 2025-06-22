import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, IsUrl } from "class-validator";

export class CreateCreatorSocialDto {
  @ApiProperty({
    example: 1,
    description: "Creator-social ID raqami",
  })
  @IsNumber()
  @IsNotEmpty()
  creatorId: number;

  @ApiProperty({
    example: 1,
    description: "cratorSocial ID raqami",
  })
  @IsNumber()
  @IsNotEmpty()
  socialId: number;

  @ApiProperty({
    example: "https://instagram",
    description: "Creator-social URL",
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string;
}
