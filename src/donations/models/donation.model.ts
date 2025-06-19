import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";

interface IDonationCreationAttr {
  supporterId: number;
  creatorId: number;
  amount: number;
  message: string;
  payment_method: string;
  is_anonymous: boolean;
}

@Table({ tableName: "donation", timestamps: true })
export class Donation extends Model<Donation, IDonationCreationAttr> {
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
  declare supporterId: number;

  @ForeignKey(() => Users)
  @Column({
    type: DataType.INTEGER,
  })
  declare creatorId: number;

  @Column({ type: DataType.DECIMAL(15, 2) })
  declare amount: number;

  @Column({ type: DataType.STRING })
  declare message: string;

  @Column({
    type: DataType.ENUM("click", "uzum", "payme", "uzcard", "humo"),
  })
  declare payment_method: string;

  @Column({ type: DataType.BOOLEAN })
  declare is_anonymous: boolean;

  @BelongsTo(() => Users)
  users: Users;
}
