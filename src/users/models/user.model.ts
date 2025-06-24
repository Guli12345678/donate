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
import { ProductOrder } from "../../product-orders/models/product-order.model";
import { ProductReview } from "../../product_reviews/models/product_review.model";
import { SavedItem } from "../../saved_items/models/saved_item.model";
import { Withdraw } from "../../withdraws/models/withdraw.model";
import { Payment } from "../../payment/models/payment.model";
import { CreatorStatistics } from "../../creator-statistics/models/creator-statistic.model";
import { Product } from "../../products/models/product.model";

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
  donation: Donation[];

  @HasMany(() => Notification)
  notification: Notification[];

  @HasMany(() => ProductOrder)
  order: ProductOrder[];

  @HasMany(() => ProductReview)
  reviews: ProductReview[];

  @HasMany(() => SavedItem)
  saved_items: SavedItem[];

  @HasMany(() => Withdraw)
  withdraws: Withdraw[];

  @HasMany(() => Payment)
  payments: Payment[];

  @HasMany(() => Product)
  products: Product[];

  @HasMany(() => CreatorStatistics)
  statistics: CreatorStatistics[];

  @HasMany(() => Withdraw)
  withdraw: Withdraw;

  @BelongsToMany(() => Social, () => CreatorSocial)
  social: Social[];
}
