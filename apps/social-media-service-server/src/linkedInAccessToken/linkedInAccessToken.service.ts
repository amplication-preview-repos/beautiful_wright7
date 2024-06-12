import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LinkedInAccessTokenServiceBase } from "./base/linkedInAccessToken.service.base";

@Injectable()
export class LinkedInAccessTokenService extends LinkedInAccessTokenServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
