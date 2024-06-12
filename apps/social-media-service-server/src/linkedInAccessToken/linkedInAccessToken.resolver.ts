import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { LinkedInAccessTokenResolverBase } from "./base/linkedInAccessToken.resolver.base";
import { LinkedInAccessToken } from "./base/LinkedInAccessToken";
import { LinkedInAccessTokenService } from "./linkedInAccessToken.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LinkedInAccessToken)
export class LinkedInAccessTokenResolver extends LinkedInAccessTokenResolverBase {
  constructor(
    protected readonly service: LinkedInAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
