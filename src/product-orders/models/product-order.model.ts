import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Kuryer } from "../../kuryer/models/kuryer.model";
import { Product } from "../../products/models/product.model";
import { Users } from "../../users/models/user.model";
import { ProductReview } from "../../product_reviews/models/product_review.model";
import { Payment } from "../../payment/models/payment.model";

interface IProductOrderCreationAttr {
  buyerId: number;
  productId: number;
  quantity: string;
  total_price: string;
  status: string;
  delivery_address: string;
  phone_number: string;
  kuryerId: number;
  delivery_status: string;
}

@Table({ tableName: "product-order" })
export class ProductOrder extends Model<
  ProductOrder,
  IProductOrderCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
  })
  declare buyerId: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  declare productId: number;
  @Column({
    type: DataType.STRING,
  })
  declare quantity: string;
  @Column({
    type: DataType.DECIMAL(15, 2),
  })
  declare total_price: string;
  @Column({
    type: DataType.ENUM("pending", "shipped", "delivered", "cancelled"),
  })
  declare status: string;
  @Column({
    type: DataType.STRING,
  })
  declare delivery_address: string;
  @Column({
    type: DataType.STRING,
  })
  declare phone_number: string;

  @ForeignKey(() => Kuryer)
  @Column({
    type: DataType.INTEGER,
  })
  declare kuryerId: number;
  @Column({
    type: DataType.ENUM("pending", "on-the-way", "delivered"),
  })
  declare delivery_status: string;

  @HasMany(() => ProductReview)
  reviews: ProductReview;

  @HasMany(() => Payment)
  payments: Payment;

  @BelongsTo(() => Kuryer)
  kuryer: Kuryer;
  @BelongsTo(() => Product)
  products: Product;
  @BelongsTo(() => Users)
  users: Users;
}
