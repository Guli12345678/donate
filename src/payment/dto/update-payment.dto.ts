import { PartialType } from "@nestjs/swagger";
import { CreatePaymentDto } from "./create-payment.dto";

export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {
  orderId?: number;
  userId?: number;
  payment_method?: string;
  status?: string;
  paid_at?: Date;
}
