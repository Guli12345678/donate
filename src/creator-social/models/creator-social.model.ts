import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { Social } from "../../social/models/social.model";

interface ICreatorSocialCreationAttr {
  creatorId: number;
  socialId: number;
  url: string;
}

@Table({ tableName: "creator-social" })
export class CreatorSocial extends Model<
  CreatorSocial,
  ICreatorSocialCreationAttr
> {
  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER })
  declare creatorId: number;

  @ForeignKey(() => Social)
  @Column({ type: DataType.INTEGER })
  declare socialId: number;

  @Column({ type: DataType.STRING })
  declare url: string;
}
