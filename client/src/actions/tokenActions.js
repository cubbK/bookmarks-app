// @flow

export function setToken (token: string) : {
  type: string,
  payload: string
} {
  return {
    type: 'SET_TOKEN',
    payload: token
  }
}