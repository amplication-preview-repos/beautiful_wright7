import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SocialMediaPostService } from "./socialmediapost.service";
import { SocialMediaPostInput } from "../socialMediaPost/SocialMediaPostInput";
import { SocialMediaPostResponse } from "../socialMediaPost/SocialMediaPostResponse";

@swagger.ApiTags("socialMediaPosts")
@common.Controller("socialMediaPosts")
export class SocialMediaPostController {
  constructor(protected readonly service: SocialMediaPostService) {}

  @common.Post("/post")
  @swagger.ApiOkResponse({
    type: SocialMediaPostResponse
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateSocialMediaPost(
    @common.Body()
    body: SocialMediaPostInput
  ): Promise<SocialMediaPostResponse> {
        return this.service.CreateSocialMediaPost(body);
      }
}
