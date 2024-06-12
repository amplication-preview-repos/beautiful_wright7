import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InstagramAccessTokenService } from "./instagramAccessToken.service";
import { InstagramAccessTokenControllerBase } from "./base/instagramAccessToken.controller.base";

@swagger.ApiTags("instagramAccessTokens")
@common.Controller("instagramAccessTokens")
export class InstagramAccessTokenController extends InstagramAccessTokenControllerBase {
  constructor(
    protected readonly service: InstagramAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
