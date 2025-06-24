import { PartialType } from "@nestjs/mapped-types";
import { CreateProductImageDto } from "./create-product_image.dto";

export class UpdateProductImageDto extends PartialType(CreateProductImageDto) {
  productId?: number;
  is_main?: boolean;
}
