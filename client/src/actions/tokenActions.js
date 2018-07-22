// @flow

export function setToken (token: string | null) : {
  type: string,
  payload: string | null
} {
  return {
    type: 'SET_TOKEN',
    payload: token
  }
}