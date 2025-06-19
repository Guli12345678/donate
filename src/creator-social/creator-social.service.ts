import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateCreatorSocialDto } from "./dto/create-creator-social.dto";
import { UpdateCreatorSocialDto } from "./dto/update-creator-social.dto";
import { InjectModel } from "@nestjs/sequelize";
import { CreatorSocial } from "./models/creator-social.model";
import { UsersService } from "../users/users.service";

@Injectable()
export class CreatorSocialService {
  constructor(
    @InjectModel(CreatorSocial) private creatorSocialModel: typeof CreatorSocial,
    private readonly usersService: UsersService
  ) {}
  async create(createCreatorSocialDto: CreateCreatorSocialDto) {
    const creator = await this.usersService.getUsersById(
      createCreatorSocialDto.creatorId
    );
    if (!creator || creator.role !== "creator") {
      throw new BadRequestException(
        "The creatorId does not belong to a creator."
      );
    }
    return this.creatorSocialModel.create(createCreatorSocialDto);
  }

  findAll() {
    return this.creatorSocialModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.creatorSocialModel.findByPk(id);
  }

  update(id: number, updateCreatorSocialDto: UpdateCreatorSocialDto) {
    return this.creatorSocialModel.update(updateCreatorSocialDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.creatorSocialModel.destroy({ where: { id } });
  }
}
