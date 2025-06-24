import { Injectable } from "@nestjs/common";
import { CreateProductReviewDto } from "./dto/create-product_review.dto";
import { UpdateProductReviewDto } from "./dto/update-product_review.dto";
import { InjectModel } from "@nestjs/sequelize";
import { ProductReview } from "./models/product_review.model";

@Injectable()
export class ProductReviewsService {
  constructor(
    @InjectModel(ProductReview) private productReviewModel: typeof ProductReview
  ) {}
  create(createProductReviewDto: CreateProductReviewDto) {
    return this.productReviewModel.create(createProductReviewDto);
  }

  findAll() {
    return this.productReviewModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.productReviewModel.findByPk(id);
  }

  update(id: number, updateProductReviewDto: UpdateProductReviewDto) {
    return this.productReviewModel.update(updateProductReviewDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.productReviewModel.destroy({ where: { id } });
  }
}
