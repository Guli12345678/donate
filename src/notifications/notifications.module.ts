import { forwardRef, Module } from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { NotificationsController } from "./notifications.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Notification } from "./models/notification.model";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Notification]),
    forwardRef(() => UsersModule),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}
