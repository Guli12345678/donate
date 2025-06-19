import { forwardRef, Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Users } from "./models/user.model";
import { NotificationsModule } from "../notifications/notifications.module";
import { DonationsModule } from "../donations/donations.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Users]),
    forwardRef(() => NotificationsModule),
    forwardRef(() => DonationsModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
