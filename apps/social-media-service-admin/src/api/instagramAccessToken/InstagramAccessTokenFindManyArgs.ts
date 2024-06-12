import { InstagramAccessTokenWhereInput } from "./InstagramAccessTokenWhereInput";
import { InstagramAccessTokenOrderByInput } from "./InstagramAccessTokenOrderByInput";

export type InstagramAccessTokenFindManyArgs = {
  where?: InstagramAccessTokenWhereInput;
  orderBy?: Array<InstagramAccessTokenOrderByInput>;
  skip?: number;
  take?: number;
};
