import { forwardRef, Module } from "@nestjs/common";
import { ProductImagesService } from "./product_images.service";
import { ProductImagesController } from "./product_images.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Product_image } from "./models/product_image.model";
import { ProductsModule } from "../products/products.module";
import { FilesModule } from "../files/files.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Product_image]),
    forwardRef(() => ProductsModule),
    FilesModule,
  ],
  controllers: [ProductImagesController],
  providers: [ProductImagesService],
})
export class ProductImagesModule {}
