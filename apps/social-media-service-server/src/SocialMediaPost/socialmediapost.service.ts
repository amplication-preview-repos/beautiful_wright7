import { Injectable } from "@nestjs/common";
import { SocialMediaPostInput } from "../socialMediaPost/SocialMediaPostInput";
import { SocialMediaPostResponse } from "../socialMediaPost/SocialMediaPostResponse";

@Injectable()
export class SocialMediaPostService {
  constructor() {}
  async CreateSocialMediaPost(args: SocialMediaPostInput): Promise<SocialMediaPostResponse> {
    throw new Error("Not implemented");
  }
}
