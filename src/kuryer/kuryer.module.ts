import { forwardRef, Module } from "@nestjs/common";
import { KuryerController } from "./kuryer.controller";
import { KuryerService } from "./kuryer.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Kuryer } from "./models/kuryer.model";
import { ProductOrdersModule } from "../product-orders/product-orders.module";

@Module({
  imports: [
    SequelizeModule.forFeature([Kuryer]),
    forwardRef(() => ProductOrdersModule),
  ],
  controllers: [KuryerController],
  providers: [KuryerService],
})
export class KuryerModule {}
