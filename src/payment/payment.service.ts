import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreatePaymentDto } from "./dto/create-payment.dto";
import { UpdatePaymentDto } from "./dto/update-payment.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Payment } from "./models/payment.model";
import { UsersService } from "../users/users.service";
import { ProductOrdersService } from "../product-orders/product-orders.service";

@Injectable()
export class PaymentService {
  constructor(
    @InjectModel(Payment) private paymentModel: typeof Payment,
    private usersService: UsersService,
    private productOrderService: ProductOrdersService
  ) {}
  async create(createPaymentDto: CreatePaymentDto) {
    const user = await this.usersService.getUsersById(createPaymentDto.userId);

    const order = await this.productOrderService.findOne(
      createPaymentDto.orderId
    );

    if (!user) {
      throw new NotFoundException("Bunday user topilmadi");
    }
    if (!order) {
      throw new NotFoundException("Bunday order topilmadi");
    }
    return this.paymentModel.create(createPaymentDto);
  }

  findAll() {
    return this.paymentModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.paymentModel.findByPk(id);
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return this.paymentModel.update(updatePaymentDto, { where: { id } });
  }

  remove(id: number) {
    return this.paymentModel.destroy({ where: { id } });
  }
}
