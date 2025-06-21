import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
} from "sequelize-typescript";
import { Admins } from "../../admins/models/admins.model";
import { AdminRole } from "../../admins/models/admin-role.model";

interface IRoleCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRoleCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(50),
    unique: true,
    allowNull: true,
  })
  declare value: string;

  @Column({
    type: DataType.STRING,
  })
  declare description: string;

  @BelongsToMany(() => Admins, () => AdminRole)
  users: Admins[];
}
