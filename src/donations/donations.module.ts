import { forwardRef, Module } from "@nestjs/common";
import { DonationsService } from "./donations.service";
import { DonationsController } from "./donations.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Donation } from "./models/donation.model";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Donation]),
    forwardRef(() => UsersModule),
  ],
  controllers: [DonationsController],
  providers: [DonationsService],
})
export class DonationsModule {}
