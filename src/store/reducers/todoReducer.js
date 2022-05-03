import {
  DESCRIPTION_CHANGED,
  TODO_SEARCHED
} from "../actions/actionTypes";

const INITIAL_STATE = { description: "", list: [] }

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload }
    case TODO_SEARCHED:
      return { ...state, list: action.payload.data }
    default:
      return state
  }
}

export default todoReducer