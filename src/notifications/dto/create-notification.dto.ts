import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchi ID raqami",
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    example: "Sizga yangi xayriya keldi!",
    description: "Notification message",
  })
  @IsString()
  @IsNotEmpty()
  message: string;
}
