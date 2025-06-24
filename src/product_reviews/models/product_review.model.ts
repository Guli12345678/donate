import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ProductOrder } from "../../product-orders/models/product-order.model";
import { Product } from "../../products/models/product.model";
import { Users } from "../../users/models/user.model";

interface IProductReviewCreationAttr {
  orderId: number;
  productId: number;
  userId: number;
  rating: string;
  comment: string;
}

@Table({ tableName: "product_review" })
export class ProductReview extends Model<
  ProductReview,
  IProductReviewCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => ProductOrder)
  @Column({
    type: DataType.INTEGER,
  })
  declare orderId: number;
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  declare productId: number;
  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;
  @Column({
    type: DataType.STRING,
  })
  declare rating: string;
  @Column({
    type: DataType.STRING,
  })
  declare comment: string;

  @BelongsTo(() => ProductOrder)
  orders: ProductOrder;
  @BelongsTo(() => Users)
  users: Users;
  @BelongsTo(() => Product)
  products: Product;
}
