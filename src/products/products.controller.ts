import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Product } from "./models/product.model";

@ApiTags("Mahsulotlar")
@Controller("products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: "Mahsulot qoshish" })
  @ApiResponse({ status: 201, description: "Created Product", type: Product })
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @ApiOperation({ summary: "Barcha mahsulotlar royxati" })
  @ApiResponse({
    status: 200,
    description: "List of Products",
    type: [Product],
  })
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @ApiOperation({ summary: "Mahsulotni id raqami boyicha olish" })
  @ApiResponse({ status: 200, description: "Get Product by id", type: Product })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productsService.findOne(+id);
  }

  @ApiOperation({ summary: "Mahsulotni ozgartirish" })
  @ApiResponse({ status: 200, description: "Updated Product", type: Product })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @ApiOperation({ summary: "Mahsulotni ochirish" })
  @ApiResponse({ status: 201, description: "Deleted Product", type: Product })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productsService.remove(+id);
  }
}
