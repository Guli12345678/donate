import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminsCreationAttr {
  full_name: string;
  email: string;
  role: string;
  password_hash: string;
  is_active: boolean;
}

@Table({ tableName: "admins", timestamps: true })
export class Admins extends Model<Admins, IAdminsCreationAttr> {
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
  declare full_name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: false,
  })
  declare email: string;

  @Column({ type: DataType.ENUM("moderator", "superAdmin") })
  declare role: string;

  @Column({ type: DataType.STRING })
  declare password_hash: string;

  @Column({ type: DataType.BOOLEAN })
  declare is_active: boolean;
}
