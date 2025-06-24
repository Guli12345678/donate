import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";

interface ICreator_StatisticsCreationAttr {
  creatorId: number;
  total_donations: number;
  total_supporters: number;
}

@Table({ tableName: "creator-statistics" })
export class CreatorStatistics extends Model<
  CreatorStatistics,
  ICreator_StatisticsCreationAttr
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
  declare creatorId: number;
  @Column({
    type: DataType.INTEGER,
  })
  declare total_donations: number;
  @Column({
    type: DataType.INTEGER,
  })
  declare total_supporters: number;
}
