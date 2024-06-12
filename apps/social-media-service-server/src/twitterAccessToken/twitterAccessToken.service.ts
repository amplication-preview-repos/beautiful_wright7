import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TwitterAccessTokenServiceBase } from "./base/twitterAccessToken.service.base";

@Injectable()
export class TwitterAccessTokenService extends TwitterAccessTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
