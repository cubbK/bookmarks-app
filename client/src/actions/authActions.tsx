import axios from "axios";
import { API_URL } from "globals";

export function setUserJWT(JWTString: string | null) {
  return {
    type: "SET_USER_JWT",
    payload: JWTString
  };
}

export function getUserDataFromServer(userJWT) {
  return {
    type: "GET_USER_DATA_FROM_SERVER",
    payload: axios.post(`${API_URL}google/getUserByToken`, {
      userJWT
    })
  };
}
