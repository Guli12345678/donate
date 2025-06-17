import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Category } from "./models/category.model";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private CategoryModel: typeof Category) {}

  async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = await this.CategoryModel.create(createCategoryDto);

    return newCategory;
  }
  async getAllCategorys() {
    return this.CategoryModel.findAll();
  }
  async getCategoryById(id: number): Promise<Category | null> {
    return this.CategoryModel.findByPk(id);
  }
  async updateCategoryById(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.CategoryModel.update(updateCategoryDto, {
      where: { id },
      returning: true,
    });
    return category[1][0];
  }

  async removeCategoryByIs(id: number): Promise<string> {
    const res = await this.CategoryModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id}-category ochirldi`;
    } else {
      return `${id} - Bunday category yoq!`;
    }
  }
}
