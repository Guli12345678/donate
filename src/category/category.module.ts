import { forwardRef, Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryService } from "./category.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Category } from "./models/category.model";
import { ProductsModule } from "../products/products.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Category]),
    forwardRef(() => ProductsModule),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
