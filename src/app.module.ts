import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { KuryerModule } from './kuryer/kuryer.module';
import { Kuryer } from "./kuryer/models/kuryer.model";
import { SocialModule } from './social/social.module';
import { CategoryModule } from './category/category.module';
import { Social } from "./social/models/social.model";
import { Category } from "./category/models/category.model";
import { AdminsModule } from './admins/admins.module';
import { Admins } from "./admins/models/admins.model";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Kuryer, Social, Category, Admins],
      autoLoadModels: true,
      logging: true,
      sync: { alter: true }, // force
    }),
    KuryerModule,
    SocialModule,
    CategoryModule,
    AdminsModule
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