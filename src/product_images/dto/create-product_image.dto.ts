import { IsNotEmpty, IsNumber, IsBoolean } from "class-validator";
import { Type } from "class-transformer";

export class CreateProductImageDto {
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  productId: number;

  @IsBoolean()
  @Type(() => Boolean)
  is_main: boolean;
}
