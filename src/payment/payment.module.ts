import { forwardRef, Module } from "@nestjs/common";
import { PaymentService } from "./payment.service";
import { PaymentController } from "./payment.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Payment } from "./models/payment.model";
import { UsersModule } from "../users/users.module";
import { ProductOrdersModule } from "../product-orders/product-orders.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Payment]),
    forwardRef(() => UsersModule),
    forwardRef(() => ProductOrdersModule),
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
