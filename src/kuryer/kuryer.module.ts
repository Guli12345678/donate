import { Module } from '@nestjs/common';
import { KuryerController } from './kuryer.controller';
import { KuryerService } from './kuryer.service';
import { SequelizeModule } from "@nestjs/sequelize";
import { Kuryer } from './models/kuryer.model';


@Module({
  imports: [SequelizeModule.forFeature([Kuryer])],
  controllers: [KuryerController],
  providers: [KuryerService],
})
export class KuryerModule {}
