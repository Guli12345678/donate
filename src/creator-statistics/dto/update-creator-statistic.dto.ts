import { PartialType } from "@nestjs/swagger";
import { CreateCreatorStatisticDto } from "./create-creator-statistic.dto";

export class UpdateCreatorStatisticDto extends PartialType(
  CreateCreatorStatisticDto
) {
  creatorId?: number;
  total_donations?: number;
  total_supporters?: number;
}
