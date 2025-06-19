export class CreateDonationDto {
  supporterId: number;
  creatorId: number;
  amount: number;
  message: string;
  payment_method: string;
  is_anonymous: boolean;
}
