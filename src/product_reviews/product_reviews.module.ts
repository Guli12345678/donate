import { forwardRef, Module } from "@nestjs/common";
import { ProductReviewsService } from "./product_reviews.service";
import { ProductReviewsController } from "./product_reviews.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductReview } from "./models/product_review.model";
import { ProductOrdersModule } from "../product-orders/product-orders.module";
import { ProductsModule } from "../products/products.module";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    SequelizeModule.forFeature([ProductReview]),
    forwardRef(() => ProductOrdersModule),
    forwardRef(() => ProductsModule),
    forwardRef(() => UsersModule),
  ],
  controllers: [ProductReviewsController],
  providers: [ProductReviewsService],
})
export class ProductReviewsModule {}
