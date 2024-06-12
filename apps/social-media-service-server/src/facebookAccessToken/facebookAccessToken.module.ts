import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FacebookAccessTokenModuleBase } from "./base/facebookAccessToken.module.base";
import { FacebookAccessTokenService } from "./facebookAccessToken.service";
import { FacebookAccessTokenController } from "./facebookAccessToken.controller";
import { FacebookAccessTokenResolver } from "./facebookAccessToken.resolver";

@Module({
  imports: [FacebookAccessTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [FacebookAccessTokenController],
  providers: [FacebookAccessTokenService, FacebookAccessTokenResolver],
  exports: [FacebookAccessTokenService],
})
export class FacebookAccessTokenModule {}
