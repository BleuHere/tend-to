import { getEmailById } from '../apis/emails'

export const SET_EMAIL = 'SET_EMAIL'

export function setEmail(email) {
  return {
    type: SET_EMAIL,
    payload: email,
  }
}

export function fetchEmail(id) {
  return (dispatch) => {
    return getEmailById(id).then((email) => {
      dispatch(setEmail(email))
    })
  }
}
