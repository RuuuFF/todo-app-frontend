import {
  DESCRIPTION_CHANGED
} from "../actions/actionTypes";

const INITIAL_STATE = {
  description: "Dormir",
  list: [{
    _id: 1,
    description: "Pagar fatura",
    done: true
  }, {
    _id: 2,
    description: "Reunião com a equipe",
    done: false
  }, {
    _id: 3,
    description: "Consulta",
    done: false
  }]
}

function todoReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DESCRIPTION_CHANGED:
      return { ...state, description: action.payload }
    default:
      return state
  }
}

export default todoReducer