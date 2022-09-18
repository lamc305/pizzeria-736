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
    case TYPES.REMOVE_ONE: {
      let item = state.products.find(
        (product) => product.id === action.payload);
      let newItem = state.products.find(product => product.quantity >= item.quantity)
      return newItem ?
        {
          ...state,
          products: state.products.map(res => (
            res.id === item.id ? { ...res, quantity: res.quantity > 0 ? res.quantity - 1 : 0 } : res
          ))
        } : {
          ...state,
          products: state.products.map(res => (
            res.id === item.id ? { ...res } : res
          ))
        }
    }
    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find((product) => product.id === action.payload)
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          ),
        }
        :
        newItem.quantity >= 1 && !isNaN(newItem.quantity) ? {
          ...state,
          cart: [...state.cart, newItem]

        } : {
          ...state
        }
        ;
    }
    case TYPES.ADD_ONE_IN_CART: {
      let item = state.cart.find(
        (product) => product.id === action.payload);
      let newItem = state.cart.find(product => product.quantity >= item.quantity)
      return newItem ?
        {
          ...state,
          cart: state.cart.map(res => (
            res.id === item.id ? { ...res, quantity: res.quantity + 1 } : res
          ))
        } : {
          ...state,
          cart: state.cart.map(res => (
            res.id === item.id ? { ...res, quantity: 1 } : res
          ))
        }
    }
    case TYPES.REMOVE_ONE_IN_CART: {
      let item = state.cart.find((product) => product.id === action.payload);
      let newItem = state.cart.find(product => product.quantity >= item.quantity)
      return newItem ?
        {
          ...state,
          cart: state.cart.map(res => (
            res.id === item.id ? { ...res, quantity: res.quantity > 0 ? res.quantity - 1 : 0 } : res
          ))
        } : {
          ...state,
          cart: state.cart.map(res => (
            res.id === item.id ? { ...res } : res
          ))
        }
    }
    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state
  }
}