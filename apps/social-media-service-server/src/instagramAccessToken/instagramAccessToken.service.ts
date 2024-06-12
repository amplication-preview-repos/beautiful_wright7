import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InstagramAccessTokenServiceBase } from "./base/instagramAccessToken.service.base";

@Injectable()
export class InstagramAccessTokenService extends InstagramAccessTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
