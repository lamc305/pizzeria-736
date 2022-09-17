import { TYPES } from "../action/actionReducer"
export const initialStateApp = {
  products: null,
  cart: []
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CALL_API:
      return {
        ...state,
        products:
          action.payload
      }
    case TYPES.ADD_ONE: {
      let item = state.products.find(
        (product) => product.id === action.payload);
      let newItem = state.products.find(product => product.quantity >= item.quantity)
      return newItem ?
        {
          ...state,
          products: state.products.map(res => (
            res.id === item.id ? { ...res, quantity: res.quantity + 1 } : res
          ))
        } : {
          ...state,
          products: state.products.map(res => (
            res.id === item.id ? { ...res, quantity: 1 } : res
          ))
        }
    }
    default:
      return state
  }
}