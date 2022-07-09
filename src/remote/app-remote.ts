import { setUserInLocalStorage } from "../shared/utils/app-utils";
import { BASE_URL } from "../constants/app";
import requestServer from "../helpers/request-server";

// paths
const get_ping_req = "";

export const getPingRemote = async (params: any) => {
  try {
    const url = BASE_URL + `${get_ping_req}?key=${params.queryKey[1]}`;
    const response = await requestServer("GET", url);
    if (response.status === 200) {
      return response.data;
    }
    throw new Error("getPingRemote() failed");
  } catch (err) {
    console.log(err);
    throw err;
  }
};
