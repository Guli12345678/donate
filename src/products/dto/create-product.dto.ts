import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
  @ApiProperty({ example: 1, description: "Creator ID raqami" })
  @IsNumber()
  @IsNotEmpty()
  creatorId: number;

  @ApiProperty({ example: "Mahsulot nomi", description: "Mahsulot nomi" })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "Mahsulot tavsifi", description: "Mahsulot tavsifi" })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 10, description: "Ombordagi soni" })
  @IsNumber()
  @IsNotEmpty()
  in_stock: number;

  @ApiProperty({ example: true, description: "Mavjudligi" })
  @IsBoolean()
  is_available: boolean;

  @ApiProperty({ example: "100000.00", description: "Narxi" })
  @IsString()
  @IsNotEmpty()
  price: string;

  @ApiProperty({ example: 2, description: "Kategoriya ID raqami" })
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;
}
