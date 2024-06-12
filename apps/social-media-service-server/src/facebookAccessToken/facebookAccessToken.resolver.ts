import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FacebookAccessTokenResolverBase } from "./base/facebookAccessToken.resolver.base";
import { FacebookAccessToken } from "./base/FacebookAccessToken";
import { FacebookAccessTokenService } from "./facebookAccessToken.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FacebookAccessToken)
export class FacebookAccessTokenResolver extends FacebookAccessTokenResolverBase {
  constructor(
    protected readonly service: FacebookAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
