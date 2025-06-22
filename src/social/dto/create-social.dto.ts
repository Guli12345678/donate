import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateSocialDto {
  @ApiProperty({ example: "Instagram", description: "CreatorSocial nomi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: "https://instagram",
    description: "CreatorSocial URL manzili",
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  social_icon: string;
}
