import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Kuryer } from "./models/kuryer.model";
import { CreateKuryerDto } from "./dto/create-kuryer.dto";
import { UpdateKuryerDto } from "./dto/update-kuryer.dto";

@Injectable()
export class KuryerService {
  constructor(@InjectModel(Kuryer) private KuryerModel: typeof Kuryer) {}

  async createKuryer(createKuryerDto: CreateKuryerDto): Promise<Kuryer> {
    const newKuryer = await this.KuryerModel.create(createKuryerDto);

    return newKuryer;
  }
  async getAllKuryers() {
    return this.KuryerModel.findAll();
  }
  async getKuryerById(id: number): Promise<Kuryer | null> {
    return this.KuryerModel.findByPk(id);
  }
  async updateKuryerById(id: number, updateKuryerDto: UpdateKuryerDto) {
    const kuryer = await this.KuryerModel.update(updateKuryerDto, {
      where: { id },
      returning: true,
    });
    return kuryer[1][0];
  }

  async removeKuryerByIs(id: number): Promise<string> {
    const res = await this.KuryerModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id}-kuryer ochirldi`;
    } else {
      return `${id} - Bunday kuryer yoq!`;
    }
  }
}
