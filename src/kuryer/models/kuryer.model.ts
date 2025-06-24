import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ProductOrder } from "../../product-orders/models/product-order.model";

interface IKuryerCreationAttr {
  full_name: string;
  email: string;
  password: string;
  telegram_link: string;
  phone_number: string;
  vehicle_type: string;
  vehicle_plate_number: string;
  is_active: boolean;
}

@Table({ tableName: "kuryer", timestamps: true })
export class Kuryer extends Model<Kuryer, IKuryerCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  declare full_name: string;

  @Column({ type: DataType.STRING(15) })
  declare phone_number: string;

  @Column({ type: DataType.ENUM("foot", "car", "bike", "motorcycle") })
  declare vehicle_type: string;

  @Column({ type: DataType.STRING })
  declare vehicle_plate_number: string;

  @Column({ type: DataType.BOOLEAN })
  declare is_active: boolean;

  @Column({ type: DataType.STRING })
  declare email: string;

  @Column({ type: DataType.STRING })
  declare password: string;

  @Column({ type: DataType.STRING })
  declare telegram_link: string;

  @HasMany(() => ProductOrder)
  orders: ProductOrder
}
