import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ProductOrder } from "../../product-orders/models/product-order.model";
import { Users } from "../../users/models/user.model";

interface IPaymentCreationAttr {
  orderId: number;
  userId: number;
  payment_method: string;
  status: string;
  paid_at: Date;
}

@Table({ tableName: "payment" })
export class Payment extends Model<Payment, IPaymentCreationAttr> {
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

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
  })
  declare userId: number;
  @Column({
    type: DataType.ENUM("cash", "card"),
  })
  declare payment_method: string;

  @Column({
    type: DataType.ENUM("pending", "cancelled", "success"),
  })
  declare status: string;
  @Column({
    type: DataType.DATE,
  })
  declare paid_at: Date;

  @BelongsTo(() => ProductOrder)
  orders: ProductOrder;

  @BelongsTo(() => Users)
  users: Users;

  


}
