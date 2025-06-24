import { forwardRef, Module } from "@nestjs/common";
import { ProductOrdersService } from "./product-orders.service";
import { ProductOrdersController } from "./product-orders.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ProductOrder } from "./models/product-order.model";
import { UsersModule } from "../users/users.module";
import { ProductsModule } from "../products/products.module";
import { KuryerModule } from "../kuryer/kuryer.module";
import { PaymentModule } from "../payment/payment.module";

@Module({
  imports: [
    SequelizeModule.forFeature([ProductOrder]),
    forwardRef(() => UsersModule),
    forwardRef(() => ProductsModule),
    forwardRef(() => KuryerModule),
    forwardRef(() => PaymentModule),
  ],
  controllers: [ProductOrdersController],
  providers: [ProductOrdersService],
  exports: [ProductOrdersService],
})
export class ProductOrdersModule {}
