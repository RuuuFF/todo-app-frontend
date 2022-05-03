import {
  DESCRIPTION_CHANGED
} from "./actionTypes"

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.value,
})