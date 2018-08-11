import axios from "axios";
import { API_URL } from "globals.js";

export interface ISetGoogleTokenReturn {
  type: string;
  payload: string | null;
}

export function setGoogleToken(token: string | null): ISetGoogleTokenReturn {
  return {
    type: "SET_GOOGLE_TOKEN",
    payload: token
  };
}

export function setUserId(userId: string | null) {
  return {
    type: "SET_USER_ID",
    payload: userId
  };
}

export function getUserDataFromServer(token: string) {
  return {
    type: "GET_USER_DATA_FROM_SERVER",
    payload: axios.post(`${API_URL}google/getUserByToken`, {
      token: token
    })
  };
}
