import { SortOrder } from "../../util/SortOrder";

export type TwitterAccessTokenOrderByInput = {
  accessToken?: SortOrder;
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
