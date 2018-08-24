import axios from "axios";
import { API_URL } from "globals.js";

export function addLink(link: string, userJWT: string) {
  return {
    type: "ADD_LINK",
    payload: axios.post(
      `${API_URL}user/addLink`,
      {
        link
      },
      {
        headers: {
          "jwt-string": userJWT
        }
      }
    )
  };
}
