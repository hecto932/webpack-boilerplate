import { HOME_TEXT } from '../types/homeTypes'

const INITIAL_STATE = {
  isLoading: false,
  error: false,
  text: '<textPlaceholder>'
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HOME_TEXT:
      return { ...state, text: action.payload, isLoading: false }
    default:
      return state
  }
}