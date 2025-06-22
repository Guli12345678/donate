import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductImagesService } from "./product_images.service";
import { CreateProductImageDto } from "./dto/create-product_image.dto";
import { UpdateProductImageDto } from "./dto/update-product_image.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Product_image } from "./models/product_image.model";

@ApiTags("Mahsulot rasmlari")
@Controller("product-images")
export class ProductImagesController {
  constructor(private readonly productImagesService: ProductImagesService) {}

  @ApiOperation({ summary: "Mahsulot rasmini qoshish" })
  @ApiResponse({
    status: 201,
    description: "Created Product Image",
    type: Product_image,
  })
  @Post()
  create(@Body() createProductImageDto: CreateProductImageDto) {
    return this.productImagesService.create(createProductImageDto);
  }

  @ApiOperation({ summary: "Barcha mahsulot rasmlari royxati" })
  @ApiResponse({
    status: 200,
    description: "List of Product Images",
    type: [Product_image],
  })
  @Get()
  findAll() {
    return this.productImagesService.findAll();
  }

  @ApiOperation({ summary: "Mahsulot rasmini id raqami boyicha olish" })
  @ApiResponse({
    status: 200,
    description: "Get Product Image by id",
    type: Product_image,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productImagesService.findOne(+id);
  }

  @ApiOperation({ summary: "Mahsulot rasmini ozgartirish" })
  @ApiResponse({
    status: 200,
    description: "Updated Product Image",
    type: Product_image,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateProductImageDto: UpdateProductImageDto
  ) {
    return this.productImagesService.update(+id, updateProductImageDto);
  }

  @ApiOperation({ summary: "Mahsulot rasmini ochirish" })
  @ApiResponse({
    status: 201,
    description: "Deleted Product Image",
    type: Product_image,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productImagesService.remove(+id);
  }
}
