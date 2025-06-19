import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Social } from "./models/social.model";
import { CreateSocialDto } from "./dto/create-social.dto";
import { UpdateSocialDto } from "./dto/update-social.dto";
import { Users } from "../users/models/user.model";

@Injectable()
export class SocialService {
  constructor(@InjectModel(Social) private SocialModel: typeof Social) {}

  async createSocial(createSocialDto: CreateSocialDto): Promise<Social> {
    const newSocial = await this.SocialModel.create(createSocialDto);

    return newSocial;
  }
  async getAllSocials() {
    return this.SocialModel.findAll({
      include: {
        model: Users,
        attributes: ["full_name", "role"],
      },
    });
  }
  async getSocialById(id: number): Promise<Social | null> {
    return this.SocialModel.findByPk(id);
  }

  async getSocialByName(name: string): Promise<Social | null> {
    return this.SocialModel.findOne({ where: { name } });
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
