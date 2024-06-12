import { FacebookAccessTokenWhereInput } from "./FacebookAccessTokenWhereInput";
import { FacebookAccessTokenOrderByInput } from "./FacebookAccessTokenOrderByInput";

export type FacebookAccessTokenFindManyArgs = {
  where?: FacebookAccessTokenWhereInput;
  orderBy?: Array<FacebookAccessTokenOrderByInput>;
  skip?: number;
  take?: number;
};
