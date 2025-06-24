import { Module } from '@nestjs/common';
import { CreatorStatisticsService } from './creator-statistics.service';
import { CreatorStatisticsController } from './creator-statistics.controller';

@Module({
  controllers: [CreatorStatisticsController],
  providers: [CreatorStatisticsService],
})
export class CreatorStatisticsModule {}
