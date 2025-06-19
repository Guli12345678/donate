import { PartialType } from '@nestjs/mapped-types';
import { CreateDonationDto } from './create-donation.dto';

export class UpdateDonationDto extends PartialType(CreateDonationDto) {
  supporterId?: number;
  creatorId?: number;
  amount?: number;
  message?: string;
  payment_method?: string;
  is_anonymous?: boolean;
}
