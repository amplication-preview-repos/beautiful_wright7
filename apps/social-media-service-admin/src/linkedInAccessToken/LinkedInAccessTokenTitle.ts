import { LinkedInAccessToken as TLinkedInAccessToken } from "../api/linkedInAccessToken/LinkedInAccessToken";

export const LINKEDINACCESSTOKEN_TITLE_FIELD = "accessToken";

export const LinkedInAccessTokenTitle = (
  record: TLinkedInAccessToken
): string => {
  return record.accessToken?.toString() || String(record.id);
};
