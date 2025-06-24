import { Injectable } from '@nestjs/common';
import { CreateCreatorStatisticDto } from './dto/create-creator-statistic.dto';
import { UpdateCreatorStatisticDto } from './dto/update-creator-statistic.dto';

@Injectable()
export class CreatorStatisticsService {
  create(createCreatorStatisticDto: CreateCreatorStatisticDto) {
    return 'This action adds a new creatorStatistic';
  }

  findAll() {
    return `This action returns all creatorStatistics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} creatorStatistic`;
  }

  update(id: number, updateCreatorStatisticDto: UpdateCreatorStatisticDto) {
    return `This action updates a #${id} creatorStatistic`;
  }

  remove(id: number) {
    return `This action removes a #${id} creatorStatistic`;
  }
}
