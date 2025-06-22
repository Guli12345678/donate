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
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Category } from "./models/category.model";

@ApiTags("Kategoriyalar")
@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: "Kategoriya qoshish" })
  @ApiResponse({
    status: 201,
    description: "Created Category",
    type: Category,
  })
  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @ApiOperation({ summary: "Barcha kategoriyalar royxati" })
  @ApiResponse({
    status: 200,
    description: "List of Categories",
    type: [Category],
  })
  @Get()
  async getAllCategorys() {
    return this.categoryService.getAllCategorys();
  }

  @ApiOperation({ summary: "Kategoriyani id raqami boyicha olish" })
  @ApiResponse({
    status: 200,
    description: "Get Category by id",
    type: Category,
  })
  @Get(":id")
  async getCategoryById(@Param("id") id: number) {
    return this.categoryService.getCategoryById(id);
  }

  @ApiOperation({ summary: "Kategoriyani ochirish" })
  @ApiResponse({
    status: 201,
    description: "Deleted Category",
    type: Category,
  })
  @Delete(":id")
  async removeCategoryByIs(@Param("id") id: number) {
    return this.categoryService.removeCategoryByIs(id);
  }

  @ApiOperation({ summary: "Kategoriyani ozgartirish" })
  @ApiResponse({
    status: 200,
    description: "Updated Category",
    type: Category,
  })
  @Patch(":id")
  async updateCategoryById(
    @Param("id") id: number,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return this.categoryService.updateCategoryById(id, updateCategoryDto);
  }
}
