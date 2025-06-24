import { Injectable } from "@nestjs/common";
import { CreateProductOrderDto } from "./dto/create-product-order.dto";
import { UpdateProductOrderDto } from "./dto/update-product-order.dto";
import { InjectModel } from "@nestjs/sequelize";
import { ProductOrder } from "./models/product-order.model";

@Injectable()
export class ProductOrdersService {
  constructor(
    @InjectModel(ProductOrder) private productOrdersModel: typeof ProductOrder
  ) {}
  create(createProductOrderDto: CreateProductOrderDto) {
    return this.productOrdersModel.create(createProductOrderDto);
  }

  findAll() {
    return this.productOrdersModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.productOrdersModel.findByPk(id);
  }

  update(id: number, updateProductOrderDto: UpdateProductOrderDto) {
    return this.productOrdersModel.update(updateProductOrderDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.productOrdersModel.destroy({ where: { id } });
  }
}
