import { forwardRef, Module } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductsController } from "./products.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product } from "./models/product.model";
import { CategoryModule } from "../category/category.module";
import { UsersModule } from "../users/users.module";
import { ProductImagesModule } from "../product_images/product_images.module";
import { ProductOrdersModule } from "../product-orders/product-orders.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Product]),
    forwardRef(() => CategoryModule),
    forwardRef(() => UsersModule),
    forwardRef(() => ProductImagesModule),
    forwardRef(() => ProductOrdersModule),
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
