import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TwitterAccessTokenService } from "./twitterAccessToken.service";
import { TwitterAccessTokenControllerBase } from "./base/twitterAccessToken.controller.base";

@swagger.ApiTags("twitterAccessTokens")
@common.Controller("twitterAccessTokens")
export class TwitterAccessTokenController extends TwitterAccessTokenControllerBase {
  constructor(
    protected readonly service: TwitterAccessTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
