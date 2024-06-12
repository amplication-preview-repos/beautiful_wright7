/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FacebookAccessToken } from "./FacebookAccessToken";
import { FacebookAccessTokenCountArgs } from "./FacebookAccessTokenCountArgs";
import { FacebookAccessTokenFindManyArgs } from "./FacebookAccessTokenFindManyArgs";
import { FacebookAccessTokenFindUniqueArgs } from "./FacebookAccessTokenFindUniqueArgs";
import { CreateFacebookAccessTokenArgs } from "./CreateFacebookAccessTokenArgs";
import { UpdateFacebookAccessTokenArgs } from "./UpdateFacebookAccessTokenArgs";
import { DeleteFacebookAccessTokenArgs } from "./DeleteFacebookAccessTokenArgs";
import { FacebookAccessTokenService } from "../facebookAccessToken.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FacebookAccessToken)
export class FacebookAccessTokenResolverBase {
  constructor(
    protected readonly service: FacebookAccessTokenService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FacebookAccessToken",
    action: "read",
    possession: "any",
  })
  async _facebookAccessTokensMeta(
    @graphql.Args() args: FacebookAccessTokenCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FacebookAccessToken])
  @nestAccessControl.UseRoles({
    resource: "FacebookAccessToken",
    action: "read",
    possession: "any",
  })
  async facebookAccessTokens(
    @graphql.Args() args: FacebookAccessTokenFindManyArgs
  ): Promise<FacebookAccessToken[]> {
    return this.service.facebookAccessTokens(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FacebookAccessToken, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FacebookAccessToken",
    action: "read",
    possession: "own",
  })
  async facebookAccessToken(
    @graphql.Args() args: FacebookAccessTokenFindUniqueArgs
  ): Promise<FacebookAccessToken | null> {
    const result = await this.service.facebookAccessToken(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FacebookAccessToken)
  @nestAccessControl.UseRoles({
    resource: "FacebookAccessToken",
    action: "create",
    possession: "any",
  })
  async createFacebookAccessToken(
    @graphql.Args() args: CreateFacebookAccessTokenArgs
  ): Promise<FacebookAccessToken> {
    return await this.service.createFacebookAccessToken({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FacebookAccessToken)
  @nestAccessControl.UseRoles({
    resource: "FacebookAccessToken",
    action: "update",
    possession: "any",
  })
  async updateFacebookAccessToken(
    @graphql.Args() args: UpdateFacebookAccessTokenArgs
  ): Promise<FacebookAccessToken | null> {
    try {
      return await this.service.updateFacebookAccessToken({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FacebookAccessToken)
  @nestAccessControl.UseRoles({
    resource: "FacebookAccessToken",
    action: "delete",
    possession: "any",
  })
  async deleteFacebookAccessToken(
    @graphql.Args() args: DeleteFacebookAccessTokenArgs
  ): Promise<FacebookAccessToken | null> {
    try {
      return await this.service.deleteFacebookAccessToken(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
