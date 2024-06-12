import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TwitterAccessTokenResolverBase } from "./base/twitterAccessToken.resolver.base";
import { TwitterAccessToken } from "./base/TwitterAccessToken";
import { TwitterAccessTokenService } from "./twitterAccessToken.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TwitterAccessToken)
export class TwitterAccessTokenResolver extends TwitterAccessTokenResolverBase {
  constructor(
    protected readonly service: TwitterAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
