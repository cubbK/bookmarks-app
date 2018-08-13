import axios from "axios";
import { API_URL } from "globals.js";

export function setUserJWT(JWTString: string | null) {
  return {
    type: "SET_USER_JWT",
    payload: JWTString
  };
}

export function getUserFromJWTString(JWTString) {
  return {
    type: "GET_USER_FROM_JWT_STRING",
    payload: axios.post(`${API_URL}google/getUserFromJWTString`, {
      JWTString
    })
  };
}
