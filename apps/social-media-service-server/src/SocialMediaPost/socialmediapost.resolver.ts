import * as graphql from "@nestjs/graphql";
import { SocialMediaPostInput } from "../socialMediaPost/SocialMediaPostInput";
import { SocialMediaPostResponse } from "../socialMediaPost/SocialMediaPostResponse";
import { SocialMediaPostService } from "./socialmediapost.service";

export class SocialMediaPostResolver {
  constructor(protected readonly service: SocialMediaPostService) {}

  @graphql.Mutation(() => SocialMediaPostResponse)
  async CreateSocialMediaPost(
    @graphql.Args()
    args: SocialMediaPostInput
  ): Promise<SocialMediaPostResponse> {
    return this.service.CreateSocialMediaPost(args);
  }
}
