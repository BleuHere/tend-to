import { getEmailById } from '../apis/emails'

export const SET_EMAIL = 'SET_EMAIL'
export const CHOP_WEEDS = 'CHOP_WEEDS'
export const FERTILISE_SOIL = 'FERTILISE_SOIL'
export const SET_USERNAME = 'SET_USERNAME'
export const SAVE_P_ONE = 'SAVE_P_ONE'
export const SET_SCORE = 'SET_SCORE'

export function setUserName(userName) {
  return {
    type: SET_USERNAME,
    payload: userName,
  }
}

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

export function savePhaseOne(plots) {
  return {
    type: SAVE_P_ONE,
    payload: plots,
  }
}

export function addPoints(points) {
  return {
    type: SET_SCORE,
    payload: points,
  }
}
