import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { InstagramAccessTokenModuleBase } from "./base/instagramAccessToken.module.base";
import { InstagramAccessTokenService } from "./instagramAccessToken.service";
import { InstagramAccessTokenController } from "./instagramAccessToken.controller";
import { InstagramAccessTokenResolver } from "./instagramAccessToken.resolver";

@Module({
  imports: [InstagramAccessTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [InstagramAccessTokenController],
  providers: [InstagramAccessTokenService, InstagramAccessTokenResolver],
  exports: [InstagramAccessTokenService],
})
export class InstagramAccessTokenModule {}
