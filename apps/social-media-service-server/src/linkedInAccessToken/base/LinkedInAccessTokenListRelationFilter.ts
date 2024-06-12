/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LinkedInAccessTokenWhereInput } from "./LinkedInAccessTokenWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class LinkedInAccessTokenListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => LinkedInAccessTokenWhereInput,
  })
  @ValidateNested()
  @Type(() => LinkedInAccessTokenWhereInput)
  @IsOptional()
  @Field(() => LinkedInAccessTokenWhereInput, {
    nullable: true,
  })
  every?: LinkedInAccessTokenWhereInput;

  @ApiProperty({
    required: false,
    type: () => LinkedInAccessTokenWhereInput,
  })
  @ValidateNested()
  @Type(() => LinkedInAccessTokenWhereInput)
  @IsOptional()
  @Field(() => LinkedInAccessTokenWhereInput, {
    nullable: true,
  })
  some?: LinkedInAccessTokenWhereInput;

  @ApiProperty({
    required: false,
    type: () => LinkedInAccessTokenWhereInput,
  })
  @ValidateNested()
  @Type(() => LinkedInAccessTokenWhereInput)
  @IsOptional()
  @Field(() => LinkedInAccessTokenWhereInput, {
    nullable: true,
  })
  none?: LinkedInAccessTokenWhereInput;
}
export { LinkedInAccessTokenListRelationFilter as LinkedInAccessTokenListRelationFilter };
