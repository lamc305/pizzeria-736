import { TYPES } from "../action/actionReducer"

export const initialStateApp = {
  products: {
    pizzas: null,
    empanadas: null,
    postres: null,
    bebidas: null,
  },
  cart: []
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CALL_API:
      return {
        ...state,
        products: {
          pizzas: action.payload[0],
          empanadas: action.payload[1],
          postres: action.payload[2],
          bebidas: action.payload[3]
        }
      }
    case TYPES.ADD_TO_CART: {
      let newItem = action.payload;
      
      return {
        ...state, cart: [...state.cart, newItem]
      }
    }
    default:
      return state
  }
}