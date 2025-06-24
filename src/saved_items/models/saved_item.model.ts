import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { Product } from "../../products/models/product.model";

interface ISaved_itemCreationAttr {
  userId: number;
  productId: number;
}

@Table({ tableName: "saved_item" })
export class SavedItem extends Model<SavedItem, ISaved_itemCreationAttr> {
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
  declare userId: number;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
  })
  declare productId: number;

  @BelongsTo(() => Users)
  users: Users;
  @BelongsTo(() => Product)
  products: Product;
}
