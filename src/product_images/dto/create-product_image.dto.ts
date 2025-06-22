import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from "class-validator";

export class CreateProductImageDto {
  @ApiProperty({
    example: 1,
    description: "Mahsulot ID raqami",
  })
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @ApiProperty({
    example: "https://example.com/image.jpg",
    description: "Rasm havolasi",
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  image_url: string;

  @ApiProperty({
    example: true,
    description: "Asosiy rasm",
  })
  @IsBoolean()
  is_main: boolean;
}
