import axios from "axios";
import { API_URL } from "constants/globals";
import * as types from "constants/actionTypes";

export function addLink(link: string, userJWT: string) {
  return {
    type: types.ADD_LINK,
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

export function resetAddLinkState() {
  return {
    type: types.RESET_ADD_LINK_STATE
  };
}

export function setLinkFavorite(
  linkId: string,
  toFavorite: boolean,
  userJWT: string
) {
  return {
    type: types.SET_LINK_FAVORITE,
    payload: axios.post(
      `${API_URL}user/setLinkFavorite`,
      {
        linkId,
        toFavorite
      },
      {
        headers: {
          "jwt-string": userJWT
        }
      }
    )
  };
}

export function deleteLink(
  linkId: string,
  userJWT: string
) {
  return {
    type: types.DELETE_LINK,
    payload: axios.post(
      `${API_URL}user/deleteLink`,
      {
        linkId
      },
      {
        headers: {
          "jwt-string": userJWT
        }
      }
    )
  }
}
