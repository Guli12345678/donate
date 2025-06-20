import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { Category } from "../../category/models/category.model";

interface IProductCreationAttr {
  creatorId: number;
  name: string;
  description: string;
  in_stock: number;
  is_available: boolean;
  price: string;
  categoryId: number;
}

@Table({ tableName: "product", timestamps: true })
export class Product extends Model<Product, IProductCreationAttr> {
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
  declare creatorId: number;

  @Column({ type: DataType.STRING })
  declare name: string;

  @Column({ type: DataType.STRING })
  declare description: string;

  @Column({
    type: DataType.INTEGER,
  })
  declare in_stock: number;
  @Column({
    type: DataType.BOOLEAN,
  })
  declare is_available: boolean;

  @Column({ type: DataType.DECIMAL(15, 2) })
  declare price: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
  })
  declare categoryId: number;

  @BelongsTo(() => Users)
  users: Users;

  @BelongsTo(() => Category)
  category: Category;
}
