import request from 'superagent'
const serverURL = 'http://localhost:3000/api/v1/'

export function getEmail() {
  return request.get(`${serverURL}emails/1`).then((response) => response)
}
