import { Module } from "@nestjs/common";
import { SocialMediaPostService } from "./socialmediapost.service";
import { SocialMediaPostController } from "./socialmediapost.controller";
import { SocialMediaPostResolver } from "./socialmediapost.resolver";

@Module({
  controllers: [SocialMediaPostController],
  providers: [SocialMediaPostService, SocialMediaPostResolver],
  exports: [SocialMediaPostService],
})
export class SocialMediaPostModule {}
