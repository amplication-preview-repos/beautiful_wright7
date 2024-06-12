import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FacebookAccessTokenService } from "./facebookAccessToken.service";
import { FacebookAccessTokenControllerBase } from "./base/facebookAccessToken.controller.base";

@swagger.ApiTags("facebookAccessTokens")
@common.Controller("facebookAccessTokens")
export class FacebookAccessTokenController extends FacebookAccessTokenControllerBase {
  constructor(
    protected readonly service: FacebookAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
