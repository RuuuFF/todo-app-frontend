import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: () => ({
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
  })
})

export default rootReducer