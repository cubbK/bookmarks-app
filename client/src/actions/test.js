export function fetchGoogle () {
  type: 'FETCH_GOOGLE',
  payload: fetch('https://google.com')
}