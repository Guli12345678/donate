import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateWithdrawDto } from "./dto/create-withdraw.dto";
import { UpdateWithdrawDto } from "./dto/update-withdraw.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Withdraw } from "./models/withdraw.model";
import { UsersService } from "../users/users.service";

@Injectable()
export class WithdrawsService {
  constructor(
    @InjectModel(Withdraw) private withdrawModel: typeof Withdraw,
    private readonly usersService: UsersService
  ) {}
  async create(createWithdrawDto: CreateWithdrawDto) {
    const creator = await this.usersService.getUsersById(
      createWithdrawDto.creatorId
    );
    if (!creator || creator.role !== "creator") {
      throw new BadRequestException(
        "The creatorId does not belong to a creator."
      );
    }
    return this.withdrawModel.create(createWithdrawDto);
  }

  findAll() {
    return this.withdrawModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.withdrawModel.findByPk(id);
  }

  update(id: number, updateWithdrawDto: UpdateWithdrawDto) {
    return this.withdrawModel.update(updateWithdrawDto, { where: { id } });
  }

  remove(id: number) {
    return this.withdrawModel.destroy({ where: { id } });
  }
}
