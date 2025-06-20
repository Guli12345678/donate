import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { AdminsModule } from "../admins/admins.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "secretkey",
      signOptions: { expiresIn: "15h" },
    }),
    AdminsModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
