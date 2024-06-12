import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FacebookAccessTokenServiceBase } from "./base/facebookAccessToken.service.base";

@Injectable()
export class FacebookAccessTokenService extends FacebookAccessTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
