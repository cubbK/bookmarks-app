import axios from "axios";
import { API_URL } from "constants/globals";
import * as types from "constants/actionTypes";

export function setUserJWT(JWTString: string | null) {
  return {
    type: types.SET_USER_JWT,
    payload: JWTString
  };
}

export function getUserFromJWTString(JWTString) {
  return {
    type: types.GET_USER_FROM_JWT_STRING,
    payload: axios.post(`${API_URL}google/getUserFromJWTString`, {
      JWTString
    })
  };
}
