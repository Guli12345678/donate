import { Column, DataType, Model, Table } from "sequelize-typescript";

interface ICategoryCreationAttr {
  name: string;
}

@Table({ tableName: "category", timestamps: true })
export class Category extends Model<Category, ICategoryCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  declare name: string;
}
