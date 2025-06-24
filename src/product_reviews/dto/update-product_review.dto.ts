import { PartialType } from "@nestjs/swagger";
import { CreateProductReviewDto } from "./create-product_review.dto";

export class UpdateProductReviewDto extends PartialType(
  CreateProductReviewDto
) {
  orderId?: number;
  productId?: number;
  userId?: number;
  rating?: string;
  comment?: string;
}
