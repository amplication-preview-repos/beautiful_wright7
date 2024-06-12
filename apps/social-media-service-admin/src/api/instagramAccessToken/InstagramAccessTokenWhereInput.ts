import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InstagramAccessTokenWhereInput = {
  accessToken?: StringNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
};
