import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  IsUrl,
} from "class-validator";

export class CreateKuryerDto {
  @ApiProperty({
    example: "Aziz Karimov",
    description: "Kuryer to'liq ismi",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @ApiProperty({
    example: "aziz@mail.uz",
    description: "Kuryer email manzili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "G!@#$1234g",
    description: "Kuryer paroli",
  })
  @IsStrongPassword({ minLength: 6, minUppercase: 0, minSymbols: 0 })
  password: string;

  @ApiProperty({
    example: "https://tetetete.uz",
    description: "Telegram havolasi",
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  telegram_link: string;

  @ApiProperty({
    example: "+998901234567",
    description: "Telefon raqami",
  })
  @IsString()
  @IsNotEmpty()
  phone_number: string;

  @ApiProperty({
    example: "car",
    description: "Transport turi",
    enum: ["foot", "car", "bike", "motorcycle"],
  })
  @IsEnum(["foot", "car", "bike", "motorcycle"])
  @IsNotEmpty()
  vehicle_type: string;

  @ApiProperty({
    example: "01A777BB",
    description: "Transport raqami",
  })
  @IsString()
  @IsNotEmpty()
  vehicle_plate_number: string;

  @ApiProperty({
    example: true,
    description: "Faol holati",
  })
  @IsBoolean()
  is_active: boolean;
}
