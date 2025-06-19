import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  full_name?: string;
  email?: string;
  password_hash?: string;
  role?: string;
  bio?: string;
  avatar_url?: string;
  banner_url?: string;
}
