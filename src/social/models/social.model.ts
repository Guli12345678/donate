import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "../../users/models/user.model";
import { CreatorSocial } from "../../creator-social/models/creator-social.model";

interface ISocialCreationAttr {
  name: string;
  social_icon: string;
}

@Table({ tableName: "social", timestamps: true })
export class Social extends Model<Social, ISocialCreationAttr> {
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

  @Column({ type: DataType.STRING })
  declare social_icon: string;

  @BelongsToMany(() => Users, () => CreatorSocial)
  users: Users[];
}
