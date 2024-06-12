import { InstagramAccessToken as TInstagramAccessToken } from "../api/instagramAccessToken/InstagramAccessToken";

export const INSTAGRAMACCESSTOKEN_TITLE_FIELD = "accessToken";

export const InstagramAccessTokenTitle = (
  record: TInstagramAccessToken
): string => {
  return record.accessToken?.toString() || String(record.id);
};
