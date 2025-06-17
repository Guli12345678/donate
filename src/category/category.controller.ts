import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Get()
  async getAllCategorys() {
    return this.categoryService.getAllCategorys();
  }
  @Get(":id")
  async getCategoryById(@Param("id") id: number) {
    return this.categoryService.getCategoryById(id);
  }
  @Delete(":id")
  async removeCategoryByIs(@Param("id") id: number) {
    return this.categoryService.removeCategoryByIs(id);
  }
  @Patch(":id")
  async updateCategoryById(
    @Param("id") id: number,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return this.categoryService.updateCategoryById(id, updateCategoryDto);
  }
}
