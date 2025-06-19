import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./models/user.model";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Social } from "../social/models/social.model";

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private UsersModel: typeof Users) {}

  async createUsers(createUsersDto: CreateUserDto): Promise<Users> {
    const newUsers = await this.UsersModel.create(createUsersDto);

    return newUsers;
  }
  async getAllUsers() {
    return this.UsersModel.findAll({
      include: {
        model: Social,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });
  }
  async getUsersById(id: number): Promise<Users | null> {
    return this.UsersModel.findByPk(id);
  }
  async getUserByRole(role: string): Promise<Users | null> {
    return this.UsersModel.findOne({ where: { role } });
  }
  async updateUserById(id: number, updateUsersDto: UpdateUserDto) {
    const users = await this.UsersModel.update(updateUsersDto, {
      where: { id },
      returning: true,
    });
    return users[1][0];
  }

  async removeUsersByIs(id: number): Promise<string> {
    const res = await this.UsersModel.destroy({ where: { id } });
    if (res > 0) {
      return `${id}-user ochirldi`;
    } else {
      return `${id} - Bunday user yoq!`;
    }
  }
}
