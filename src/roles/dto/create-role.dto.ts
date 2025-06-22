import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
  @ApiProperty({ example: "admin", description: "Role nomi" })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({ example: "Admin roles uchun", description: "Role decription" })
  @IsString()
  @IsNotEmpty()
  description: string;
}
