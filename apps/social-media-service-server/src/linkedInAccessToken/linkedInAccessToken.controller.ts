import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LinkedInAccessTokenService } from "./linkedInAccessToken.service";
import { LinkedInAccessTokenControllerBase } from "./base/linkedInAccessToken.controller.base";

@swagger.ApiTags("linkedInAccessTokens")
@common.Controller("linkedInAccessTokens")
export class LinkedInAccessTokenController extends LinkedInAccessTokenControllerBase {
  constructor(
    protected readonly service: LinkedInAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
