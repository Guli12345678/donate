import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Admins } from "./models/admins.model";
import { CreateAdminsDto } from "./dto/create-admins.dto";
import { UpdateAdminsDto } from "./dto/update-admins.dto";

@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admins) private AdminsModel: typeof Admins) {}

  async createAdmins(createAdminsDto: CreateAdminsDto): Promise<Admins> {
    const newAdmins = await this.AdminsModel.create(createAdminsDto);

    return newAdmins;
  }
  async getAllAdminss() {
    return this.AdminsModel.findAll();
  }
  async getAdminsById(id: number): Promise<Admins | null> {
    return this.AdminsModel.findByPk(id);
  }
  async updateAdminsById(id: number, updateAdminsDto: UpdateAdminsDto) {
    const admins = await this.AdminsModel.update(updateAdminsDto, {
      where: { id },
      returning: true,
    });
    return admins[1][0];
  }

  async removeAdminsByIs(id: number): Promise<string> {
    const res = await this.AdminsModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id}-admins ochirldi`;
    } else {
      return `${id} - Bunday admins yoq!`;
    }
  }
}
