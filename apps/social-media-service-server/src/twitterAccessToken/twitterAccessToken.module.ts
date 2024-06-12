import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TwitterAccessTokenModuleBase } from "./base/twitterAccessToken.module.base";
import { TwitterAccessTokenService } from "./twitterAccessToken.service";
import { TwitterAccessTokenController } from "./twitterAccessToken.controller";
import { TwitterAccessTokenResolver } from "./twitterAccessToken.resolver";

@Module({
  imports: [TwitterAccessTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [TwitterAccessTokenController],
  providers: [TwitterAccessTokenService, TwitterAccessTokenResolver],
  exports: [TwitterAccessTokenService],
})
export class TwitterAccessTokenModule {}
