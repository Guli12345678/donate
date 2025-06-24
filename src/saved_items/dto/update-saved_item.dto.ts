import { PartialType } from "@nestjs/swagger";
import { CreateSavedItemDto } from "./create-saved_item.dto";

export class UpdateSavedItemDto extends PartialType(CreateSavedItemDto) {
  userId?: number;
  productId?: number;
}
