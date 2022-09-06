import { TYPES } from "../action/actionReducer"

export const initialStateApp = {
  pizzas: null,
  empanadas: null,
  postres: null,
  bebidas: null,
  cart: []
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CALL_API:
      return {
        ...state,
        pizzas: action.payload[0],
        empanadas: action.payload[1],
        postres: action.payload[2],
        bebidas: action.payload[3]
      }
    default:
      return state
  }
}
