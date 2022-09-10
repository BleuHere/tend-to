import request from 'superagent'
const serverURL = '/api/v1/'

export function getPlotStateById(id) {
  return request
    .get(`${serverURL}plot/${id}`)
    .then((response) => response.body)
    .catch((err) => console.error(err))
}
