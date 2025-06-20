import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { CreateAdminsDto } from "../admins/dto/create-admins.dto";
import { AdminsService } from "../admins/admins.service";
import { JwtService } from "@nestjs/jwt";
import { SignInAdminDto } from "../admins/dto/sign-admin.dto";
import { Admins } from "../admins/models/admins.model";

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminsService,
    private readonly jwtService: JwtService
  ) {}
  async signUp(createAdminDto: CreateAdminsDto) {
    const admin = await this.adminService.getAdminByEmail(createAdminDto.email);
    if (admin) {
      throw new ConflictException("This admin already exists!");
    }
    const hashed_password = await bcrypt.hash(createAdminDto.password_hash, 7);

    createAdminDto.password_hash = hashed_password;

    const newAdmin = await this.adminService.createAdmins(createAdminDto);

    return newAdmin;
  }

  private async generateToken(admin: Admins) {
    const payload = {
      id: admin.id,
      email: admin.email,
      is_active: admin.is_active,
    };

    let token: any;
    try {
      token = await this.jwtService.sign(payload);
      console.log(token);
    } catch (error) {
      console.log("Error:", error);
    }
    return { token };
  }

  async signin(signinAdminDto: SignInAdminDto) {
    const admin = await this.adminService.getAdminByEmail(signinAdminDto.email);
    if (!admin) {
      throw new UnauthorizedException("Email or password incorrect!");
    }
    const validPassword = await bcrypt.compare(
      signinAdminDto.password_hash,
      admin.password_hash
    );
    if (!validPassword) {
      throw new UnauthorizedException("Email or password incorrect!");
    }
    const token = await this.generateToken(admin);

    return { message: "Admin signed in", id: admin.id, token };
  }
}
