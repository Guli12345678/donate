import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { KuryerModule } from "./kuryer/kuryer.module";
import { Kuryer } from "./kuryer/models/kuryer.model";
import { SocialModule } from "./social/social.module";
import { CategoryModule } from "./category/category.module";
import { Social } from "./social/models/social.model";
import { Category } from "./category/models/category.model";
import { AdminsModule } from "./admins/admins.module";
import { Admins } from "./admins/models/admins.model";
import { UsersModule } from "./users/users.module";
import { Users } from "./users/models/user.model";
import { DonationsModule } from "./donations/donations.module";
import { Donation } from "./donations/models/donation.model";
import { NotificationsModule } from "./notifications/notifications.module";
import { Notification } from "./notifications/models/notification.model";
import { CreatorSocialModule } from "./creator-social/creator-social.module";
import { CreatorSocial } from "./creator-social/models/creator-social.model";
import { AuthModule } from "./auth/auth.module";
import { ProductsModule } from "./products/products.module";
import { ProductImagesModule } from "./product_images/product_images.module";
import { RolesModule } from "./roles/roles.module";
import { AdminRole } from "./admins/models/admin-role.model";
import { Role } from "./roles/models/role.model";
import { ProductOrdersModule } from "./product-orders/product-orders.module";
import { WithdrawsModule } from "./withdraws/withdraws.module";
import { PaymentModule } from "./payment/payment.module";
import { SavedItemsModule } from "./saved_items/saved_items.module";
import { ProductReviewsModule } from "./product_reviews/product_reviews.module";
import { CreatorStatisticsModule } from "./creator-statistics/creator-statistics.module";
import { ProductOrder } from "./product-orders/models/product-order.model";
import { Withdraw } from "./withdraws/models/withdraw.model";
import { Payment } from "./payment/models/payment.model";
import { ProductReview } from "./product_reviews/models/product_review.model";
import { SavedItem } from "./saved_items/models/saved_item.model";
import { CreatorStatistics } from "./creator-statistics/models/creator-statistic.model";
import { Product } from "./products/models/product.model";
import { Product_image } from "./product_images/models/product_image.model";
import { FilesModule } from "./files/files.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, "..", "static") }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [
        Kuryer,
        Social,
        Category,
        Admins,
        Users,
        Donation,
        Notification,
        CreatorSocial,
        AdminRole,
        Role,
        ProductOrder,
        Withdraw,
        Payment,
        ProductReview,
        SavedItem,
        CreatorStatistics,
        Product,
        Product_image,
      ],
      autoLoadModels: true,
      logging: false,
      sync: { alter: true }, // force
    }),
    KuryerModule,
    SocialModule,
    CategoryModule,
    AdminsModule,
    UsersModule,
    DonationsModule,
    NotificationsModule,
    CreatorSocialModule,
    AuthModule,
    ProductsModule,
    ProductImagesModule,
    RolesModule,
    ProductOrdersModule,
    WithdrawsModule,
    PaymentModule,
    SavedItemsModule,
    ProductReviewsModule,
    CreatorStatisticsModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

// npm i --save @nestjs/config
// npm install --save @nestjs/sequelize sequelize sequelize-typescript pg
// npm install --save-dev @types/sequelize (podskazka un )
// nest g mo <company> - module yaratadi
// nest g co <company>  --no-spec     - controller yaratadi
// nest g s <company>  --no-spec     - service yaratadi
