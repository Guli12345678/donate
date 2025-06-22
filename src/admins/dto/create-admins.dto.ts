import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from "class-validator";

export class CreateAdminsDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "user1@mail.uz",
    description: "This includes user's email",
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    example: "G!@#$1234g",
    description: "This includes user's password",
  })
  @IsStrongPassword({ minLength: 6, minUppercase: 0, minSymbols: 0 })
  password_hash: string;
  @ApiProperty({
    example: "user",
    description: "This includes user's initial role",
  })
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsBoolean()
  is_active: boolean;
}
