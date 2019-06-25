import { HOME_TEXT } from '../types/homeTypes'

export const setText = (text) => (dispatch) => {
  dispatch({
    type: HOME_TEXT,
    payload: text
  })
}