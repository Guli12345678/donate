import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "../../products/models/product.model";

interface IProduct_imageCreationAttr {
  productId: number;
  image_url: string;
  is_main: boolean;
}

@Table({ tableName: "product_image", timestamps: true })
export class Product_image extends Model<
  Product_image,
  IProduct_imageCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  declare productId: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  declare image_url: string;
}
