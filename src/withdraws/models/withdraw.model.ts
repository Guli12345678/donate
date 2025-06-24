import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";

interface IWithdrawsCreationAttr {
  creatorId: number;
  amount: string;
  status: string;
  site_fee: string;
}

@Table({ tableName: "withdraws" })
export class Withdraw extends Model<Withdraw, IWithdrawsCreationAttr> {
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
  creatorId: number;

  @Column({
    type: DataType.DECIMAL(15, 2),
  })
  amount: string;
  @Column({
    type: DataType.ENUM("pending", "approved", "rejected"),
  })
  status: string;
  @Column({
    type: DataType.DECIMAL(15, 2),
  })
  site_fee: string;

  @BelongsTo(() => Users)
  creators: Users;
}
