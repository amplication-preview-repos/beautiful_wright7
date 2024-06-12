import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { InstagramAccessTokenResolverBase } from "./base/instagramAccessToken.resolver.base";
import { InstagramAccessToken } from "./base/InstagramAccessToken";
import { InstagramAccessTokenService } from "./instagramAccessToken.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => InstagramAccessToken)
export class InstagramAccessTokenResolver extends InstagramAccessTokenResolverBase {
  constructor(
    protected readonly service: InstagramAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
