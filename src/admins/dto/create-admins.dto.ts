export class CreateAdminsDto {
  full_name: string;
  email: string;
  role: string;
  password_hash: string;
  is_active: boolean;
}
