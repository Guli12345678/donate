import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { Donation } from "../../donations/models/donation.model";
import { Notification } from "../../notifications/models/notification.model";
import { Social } from "../../social/models/social.model";
import { CreatorSocial } from "../../creator-social/models/creator-social.model";

interface IUsersCreationAttr {
  full_name: string;
  email: string;
  password_hash: string;
  role: string;
  bio: string;
  avatar_url: string;
  banner_url: string;
}

@Table({ tableName: "users", timestamps: true })
export class Users extends Model<Users, IUsersCreationAttr> {
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
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
  })
  declare password_hash: string;

  @Column({
    type: DataType.ENUM("user", "creator"),
  })
  declare role: string;

  @Column({
    type: DataType.STRING,
  })
  declare bio: string;

  @Column({
    type: DataType.STRING(50),
  })
  declare avatar_url: string;

  @Column({
    type: DataType.STRING(50),
  })
  declare banner_url: string;

  @HasMany(() => Donation)
  donation: Donation;

  @HasMany(() => Notification)
  notification: Notification[];

  @BelongsToMany(() => Social, () => CreatorSocial)
  social: Social[];
}
