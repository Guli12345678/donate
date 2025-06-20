import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./models/product.model";
import { UsersService } from "../users/users.service";
import { CategoryService } from "../category/category.service";
import { NotFoundError } from "rxjs";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productModel: typeof Product,
    private readonly usersService: UsersService,
    private readonly categoryService: CategoryService
  ) {}

  async create(createProductDto: CreateProductDto) {
    const creator = await this.usersService.getUsersById(
      createProductDto.creatorId
    );
    const category = await this.categoryService.getCategoryById(
      createProductDto.categoryId
    );
    if (!category) {
      throw new NotFoundError("Bunday category topilmadi")
    }
    if (!creator || creator.role !== "creator") {
      throw new BadRequestException(
        "The creatorId does not belong to a creator."
      );
    }
    return this.productModel.create(createProductDto);
  }

  findAll() {
    return this.productModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.productModel.findByPk(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.update(updateProductDto, { where: { id } });
  }

  remove(id: number) {
    return this.productModel.destroy({ where: { id } });
  }
}
