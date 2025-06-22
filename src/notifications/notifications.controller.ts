import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { NotificationsService } from "./notifications.service";
import { CreateNotificationDto } from "./dto/create-notification.dto";
import { UpdateNotificationDto } from "./dto/update-notification.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Notification } from "./models/notification.model";

@ApiTags("Bildirishnomalar")
@Controller("notifications")
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @ApiOperation({ summary: "Bildirishnoma qoshish" })
  @ApiResponse({
    status: 201,
    description: "Created Notification",
    type: Notification,
  })
  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }

  @ApiOperation({ summary: "Barcha bildirishnomalar royxati" })
  @ApiResponse({
    status: 200,
    description: "List of Notifications",
    type: [Notification],
  })
  @Get()
  findAll() {
    return this.notificationsService.findAll();
  }

  @ApiOperation({ summary: "Bildirishnomani id raqami boyicha olish" })
  @ApiResponse({
    status: 200,
    description: "Get Notification by id",
    type: Notification,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.notificationsService.findOne(+id);
  }

  @ApiOperation({ summary: "Bildirishnomani ozgartirish" })
  @ApiResponse({
    status: 200,
    description: "Updated Notification",
    type: Notification,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateNotificationDto: UpdateNotificationDto
  ) {
    return this.notificationsService.update(+id, updateNotificationDto);
  }

  @ApiOperation({ summary: "Bildirishnomani ochirish" })
  @ApiResponse({
    status: 201,
    description: "Deleted Notification",
    type: Notification,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.notificationsService.remove(+id);
  }
}
