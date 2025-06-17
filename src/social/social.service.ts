import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Social } from "./models/social.model";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";

@Injectable()
export class SocialService {
  constructor(@InjectModel(Social) private SocialModel: typeof Social) {}

  async createSocial(createSocialDto: CreateSocialDto): Promise<Social> {
    const newSocial = await this.SocialModel.create(createSocialDto);

    return newSocial;
  }
  async getAllSocials() {
    return this.SocialModel.findAll();
  }
  async getSocialById(id: number): Promise<Social | null> {
    return this.SocialModel.findByPk(id);
  }
  async updateSocialById(id: number, updateSocialDto: UpdateSocialDto) {
    const social = await this.SocialModel.update(updateSocialDto, {
      where: { id },
      returning: true,
    });
    return social[1][0];
  }

  async removeSocialByIs(id: number): Promise<string> {
    const res = await this.SocialModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id}-social ochirldi`;
    } else {
      return `${id} - Bunday social yoq!`;
    }
  }
}
