import { Module } from "@nestjs/common";
import { CreatorSocialService } from "./creator-social.service";
import { CreatorSocialController } from "./creator-social.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { CreatorSocial } from "./models/creator-social.model";
import { UsersModule } from "../users/users.module";

@Module({
  imports: [SequelizeModule.forFeature([CreatorSocial]), UsersModule],
  controllers: [CreatorSocialController],
  providers: [CreatorSocialService],
})
export class CreatorSocialModule {}
