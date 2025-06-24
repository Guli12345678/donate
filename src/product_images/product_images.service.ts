import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductImageDto } from "./dto/create-product_image.dto";
import { UpdateProductImageDto } from "./dto/update-product_image.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Product_image } from "./models/product_image.model";
import { ProductsService } from "../products/products.service";
import { FilesService } from "../files/files.service";

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectModel(Product_image) private productImageModel: typeof Product_image,
    private readonly productService: ProductsService,
    private readonly fileService: FilesService
  ) {}
  async create(createProductImageDto: CreateProductImageDto, image_url: any) {
    const product = await this.productService.findOne(
      createProductImageDto.productId
    );

    if (!product) {
      throw new NotFoundException("Bunday product yoq");
    }
    const fileName = await this.fileService.saveFile(image_url);

    return this.productImageModel.create({
      ...createProductImageDto,
      image_url: fileName,
    });
  }

  findAll() {
    return this.productImageModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.productImageModel.findByPk(id);
  }

  update(id: number, updateProductImageDto: UpdateProductImageDto) {
    return this.productImageModel.update(updateProductImageDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.productImageModel.destroy({ where: { id } });
  }
}
