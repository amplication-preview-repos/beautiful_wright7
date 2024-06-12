import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LinkedInAccessTokenModuleBase } from "./base/linkedInAccessToken.module.base";
import { LinkedInAccessTokenService } from "./linkedInAccessToken.service";
import { LinkedInAccessTokenController } from "./linkedInAccessToken.controller";
import { LinkedInAccessTokenResolver } from "./linkedInAccessToken.resolver";

@Module({
  imports: [LinkedInAccessTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [LinkedInAccessTokenController],
  providers: [LinkedInAccessTokenService, LinkedInAccessTokenResolver],
  exports: [LinkedInAccessTokenService],
})
export class LinkedInAccessTokenModule {}
