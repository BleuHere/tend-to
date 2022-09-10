import { getEmailById } from '../apis/emails'

export const SET_EMAIL = 'SET_EMAIL'
export const CHOP_WEEDS = 'CHOP_WEEDS'
export const FERTILISE_SOIL = 'FERTILISE_SOIL'

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

export function chopWeeds(id) {
  return {
    type: CHOP_WEEDS,
    payload: id,
  }
}

export function fertiliseSoil(id) {
  return {
    type: FERTILISE_SOIL,
    payload: id,
  }
}
