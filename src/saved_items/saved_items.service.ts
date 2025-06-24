import { Injectable } from "@nestjs/common";
import { CreateSavedItemDto } from "./dto/create-saved_item.dto";
import { UpdateSavedItemDto } from "./dto/update-saved_item.dto";
import { InjectModel } from "@nestjs/sequelize";
import { SavedItem } from "./models/saved_item.model";

@Injectable()
export class SavedItemsService {
  constructor(
    @InjectModel(SavedItem) private savedItemModel: typeof SavedItem
  ) {}
  create(createSavedItemDto: CreateSavedItemDto) {
    return this.savedItemModel.create(createSavedItemDto);
  }

  findAll() {
    return this.savedItemModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.savedItemModel.findByPk(id);
  }

  update(id: number, updateSavedItemDto: UpdateSavedItemDto) {
    return this.savedItemModel.update(updateSavedItemDto, { where: { id } });
  }

  remove(id: number) {
    return this.savedItemModel.destroy({ where: { id } });
  }
}
