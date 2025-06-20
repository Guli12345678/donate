import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Users } from "./models/user.model";
import { NotificationsModule } from "../notifications/notifications.module";
import { DonationsModule } from "../donations/donations.module";
import { ProductsModule } from "../products/products.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    forwardRef(() => NotificationsModule),
    forwardRef(() => DonationsModule),
    forwardRef(() => ProductsModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
