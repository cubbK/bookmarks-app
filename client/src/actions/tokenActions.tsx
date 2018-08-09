export interface ISetGoogleTokenReturn {
  type: string;
  payload: string | null;
}

export function setGoogleToken(token: string | null): ISetGoogleTokenReturn {
  return {
    type: "SET_GOOGLE_TOKEN",
    payload: token,
  };
}
