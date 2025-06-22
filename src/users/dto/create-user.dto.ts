import { ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "Ali Valiyev",
    description: "Foydalanuvchi to'liq ismi",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "ali@mail.uz",
    description: "Foydalanuvchi email manzili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "G!@#$1234g", description: "Foydalanuvchi paroli" })
  @IsString()
  @IsNotEmpty()
  password_hash: string;

  @ApiProperty({ example: "user", description: "Foydalanuvchi roli" })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    example: "Ijodkor va dasturchi",
    description: "Foydalanuvchi bio-si",
  })
  @IsString()
  @IsOptional()
  bio: string;

  @ApiProperty({
    example: "https://avatar.url",
    description: "Avatar URL manzili",
  })
  @IsString()
  @IsOptional()
  @IsUrl()
  avatar_url: string;

  @ApiProperty({
    example: "https://banner.url",
    description: "Banner URL manzili",
  })
  @IsString()
  @IsOptional()
  @IsUrl()
  banner_url: string;
}
