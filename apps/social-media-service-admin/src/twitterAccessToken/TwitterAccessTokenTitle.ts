import { TwitterAccessToken as TTwitterAccessToken } from "../api/twitterAccessToken/TwitterAccessToken";

export const TWITTERACCESSTOKEN_TITLE_FIELD = "accessToken";

export const TwitterAccessTokenTitle = (
  record: TTwitterAccessToken
): string => {
  return record.accessToken?.toString() || String(record.id);
};
