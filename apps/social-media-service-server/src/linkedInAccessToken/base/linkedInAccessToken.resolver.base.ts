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
import { LinkedInAccessToken } from "./LinkedInAccessToken";
import { LinkedInAccessTokenCountArgs } from "./LinkedInAccessTokenCountArgs";
import { LinkedInAccessTokenFindManyArgs } from "./LinkedInAccessTokenFindManyArgs";
import { LinkedInAccessTokenFindUniqueArgs } from "./LinkedInAccessTokenFindUniqueArgs";
import { CreateLinkedInAccessTokenArgs } from "./CreateLinkedInAccessTokenArgs";
import { UpdateLinkedInAccessTokenArgs } from "./UpdateLinkedInAccessTokenArgs";
import { DeleteLinkedInAccessTokenArgs } from "./DeleteLinkedInAccessTokenArgs";
import { LinkedInAccessTokenService } from "../linkedInAccessToken.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => LinkedInAccessToken)
export class LinkedInAccessTokenResolverBase {
  constructor(
    protected readonly service: LinkedInAccessTokenService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "LinkedInAccessToken",
    action: "read",
    possession: "any",
  })
  async _linkedInAccessTokensMeta(
    @graphql.Args() args: LinkedInAccessTokenCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [LinkedInAccessToken])
  @nestAccessControl.UseRoles({
    resource: "LinkedInAccessToken",
    action: "read",
    possession: "any",
  })
  async linkedInAccessTokens(
    @graphql.Args() args: LinkedInAccessTokenFindManyArgs
  ): Promise<LinkedInAccessToken[]> {
    return this.service.linkedInAccessTokens(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => LinkedInAccessToken, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "LinkedInAccessToken",
    action: "read",
    possession: "own",
  })
  async linkedInAccessToken(
    @graphql.Args() args: LinkedInAccessTokenFindUniqueArgs
  ): Promise<LinkedInAccessToken | null> {
    const result = await this.service.linkedInAccessToken(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LinkedInAccessToken)
  @nestAccessControl.UseRoles({
    resource: "LinkedInAccessToken",
    action: "create",
    possession: "any",
  })
  async createLinkedInAccessToken(
    @graphql.Args() args: CreateLinkedInAccessTokenArgs
  ): Promise<LinkedInAccessToken> {
    return await this.service.createLinkedInAccessToken({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => LinkedInAccessToken)
  @nestAccessControl.UseRoles({
    resource: "LinkedInAccessToken",
    action: "update",
    possession: "any",
  })
  async updateLinkedInAccessToken(
    @graphql.Args() args: UpdateLinkedInAccessTokenArgs
  ): Promise<LinkedInAccessToken | null> {
    try {
      return await this.service.updateLinkedInAccessToken({
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

  @graphql.Mutation(() => LinkedInAccessToken)
  @nestAccessControl.UseRoles({
    resource: "LinkedInAccessToken",
    action: "delete",
    possession: "any",
  })
  async deleteLinkedInAccessToken(
    @graphql.Args() args: DeleteLinkedInAccessTokenArgs
  ): Promise<LinkedInAccessToken | null> {
    try {
      return await this.service.deleteLinkedInAccessToken(args);
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
