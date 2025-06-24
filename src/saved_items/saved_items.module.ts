import { forwardRef, Module } from "@nestjs/common";
import { SavedItemsService } from "./saved_items.service";
import { SavedItemsController } from "./saved_items.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { SavedItem } from "./models/saved_item.model";
import { UsersModule } from "../users/users.module";
import { ProductsModule } from "../products/products.module";

@Module({
  imports: [
    SequelizeModule.forFeature([SavedItem]),
    forwardRef(() => UsersModule),
    forwardRef(() => ProductsModule),
  ],
  controllers: [SavedItemsController],
  providers: [SavedItemsService],
})
export class SavedItemsModule {}
