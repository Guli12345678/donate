export class CreatePaymentDto {
  orderId: number;
  userId: number;
  payment_method: string;
  status: string;
  paid_at: Date;
}
