import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TwitterAccessTokenWhereInput = {
  accessToken?: StringNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
};
