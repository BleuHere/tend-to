import request from 'superagent'
const serverURL = '/api/v1/'

export function getEmails() {
  return request.get(`${serverURL}emails`).then((response) => response)
}

export function getEmailById(id) {
  return request
    .get(`${serverURL}emails/${id}`)
    .then((response) => response.body)
    .catch((err) => console.error(err))
}
