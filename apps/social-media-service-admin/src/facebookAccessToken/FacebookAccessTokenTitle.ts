import { FacebookAccessToken as TFacebookAccessToken } from "../api/facebookAccessToken/FacebookAccessToken";

export const FACEBOOKACCESSTOKEN_TITLE_FIELD = "accessToken";

export const FacebookAccessTokenTitle = (
  record: TFacebookAccessToken
): string => {
  return record.accessToken?.toString() || String(record.id);
};
