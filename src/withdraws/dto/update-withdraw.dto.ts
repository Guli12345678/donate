import { PartialType } from "@nestjs/swagger";
import { CreateWithdrawDto } from "./create-withdraw.dto";

export class UpdateWithdrawDto extends PartialType(CreateWithdrawDto) {
  creatorId?: number;
  amount?: string;
  status?: string;
  site_fee?: string;
}
