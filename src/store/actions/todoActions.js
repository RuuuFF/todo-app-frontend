import axios from 'axios'

const URL = "http://localhost:3003/api/todos"

import {
  DESCRIPTION_CHANGED,
  TODO_SEARCHED
} from "./actionTypes"

export const changeDescription = event => ({
  type: DESCRIPTION_CHANGED,
  payload: event.target.value,
})

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)

  return {
    type: TODO_SEARCHED,
    payload: request
  }
}