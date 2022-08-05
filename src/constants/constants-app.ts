export const __DEV__ = true;

export const DEV_API_URL = "";
export const LIVE_API_URL = "";

export const BASE_URL = __DEV__ ? DEV_API_URL : LIVE_API_URL;
