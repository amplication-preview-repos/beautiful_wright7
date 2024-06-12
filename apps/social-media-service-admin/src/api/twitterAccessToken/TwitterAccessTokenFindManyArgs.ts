import { TwitterAccessTokenWhereInput } from "./TwitterAccessTokenWhereInput";
import { TwitterAccessTokenOrderByInput } from "./TwitterAccessTokenOrderByInput";

export type TwitterAccessTokenFindManyArgs = {
  where?: TwitterAccessTokenWhereInput;
  orderBy?: Array<TwitterAccessTokenOrderByInput>;
  skip?: number;
  take?: number;
};
