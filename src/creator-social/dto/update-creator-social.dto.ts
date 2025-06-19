import { PartialType } from "@nestjs/mapped-types";
import { CreateCreatorSocialDto } from "./create-creator-social.dto";

export class UpdateCreatorSocialDto extends PartialType(
  CreateCreatorSocialDto
) {
  creatorId?: number;
  socialId?: number;
  url?: string;
}
