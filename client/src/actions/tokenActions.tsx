// @flow

export function setGoogleToken (token: string | null) : {
  type: string,
  payload: string | null
} {
  return {
    type: 'SET_GOOGLE_TOKEN',
    payload: token
  }
}