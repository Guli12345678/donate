import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";

interface INotificationCreationAttr {
  userId: number;
  message: string;
}

@Table({ tableName: "notification", timestamps: true })
export class Notification extends Model<
  Notification,
  INotificationCreationAttr
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
  declare userId: number;

  @Column({
    type: DataType.STRING,
  })
  declare message: string;

  @BelongsTo(() => Users)
  users: Users;
}
