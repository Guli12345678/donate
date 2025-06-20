import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  creatorId?: number;
  name?: string;
  description?: string;
  in_stock?: number;
  is_available?: boolean;
  price?: string;
  categoryId?: number;
}
