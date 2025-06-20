import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignInAdminDto } from "../admins/dto/sign-admin.dto";
import { CreateAdminsDto } from "../admins/dto/create-admins.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  signUp(@Body() createAdminsDto: CreateAdminsDto) {
    return this.authService.signUp(createAdminsDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("signin")
  signin(@Body() signInAdminDto: SignInAdminDto) {
    return this.authService.signin(signInAdminDto);
  }
}
