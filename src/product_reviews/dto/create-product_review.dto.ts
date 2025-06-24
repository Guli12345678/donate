export class CreateProductReviewDto {
  orderId: number;
  productId: number;
  userId: number;
  rating: string;
  comment: string;
}
