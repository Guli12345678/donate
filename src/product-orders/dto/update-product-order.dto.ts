import { PartialType } from "@nestjs/swagger";
import { CreateProductOrderDto } from "./create-product-order.dto";

export class UpdateProductOrderDto extends PartialType(CreateProductOrderDto) {
  buyerId?: number;
  productId?: number;
  quantity?: string;
  total_price?: string;
  status?: string;
  delivery_address?: string;
  phone_number?: string;
  kuryerId?: number;
  delivery_status?: string;
}
