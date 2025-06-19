export class CreateUserDto {
  full_name: string;
  email: string;
  password_hash: string;
  role: string;
  bio: string;
  avatar_url: string;
  banner_url: string;
}
