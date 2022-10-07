import { TYPES } from "../action/actionReducer"
import jsonProducts from '../donremolo.json'

export const initialStateApp = {
  isLoading: false,
  products: JSON.parse(sessionStorage.getItem('stateProductsPizza')) || jsonProducts,
  cart: JSON.parse(sessionStorage.getItem('stateCartPizza')) || []
}

export const appReducer = (state, action) => {
  switch (action.type) {
    case TYPES.CALL_API:
      return state.products === null ? {
        ...state,
        isLoading: false,
        products:
          action.payload
      } : {
        ...state
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
          products:
            state.products.map(res => (
              res.id === newItem.id ? { ...res, inCart: true } : res
            ))
          ,
          cart: [...state.cart, newItem]

        } : {
          ...state
        }
        ;
    }
    case TYPES.ADD_ONE_IN_CART: {
      let item = state.cart.find(product => product.id === action.payload);
      let newItem = state.cart.find(product => product.quantity >= item.quantity)
      return newItem ?
        {
          products: state.products.map(res => (
            res.id === item.id ? { ...res, quantity: res.quantity + 1 } : res
          )),
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
      return item.quantity > 1 ?
        {
          products: state.products.map(res => (
            res.id === item.id ? { ...res, quantity: res.quantity - 1 } : res
          )),
          cart: state.cart.map(res => (
            res.id === item.id ? { ...res, quantity: res.quantity - 1 } : res
          ))
        } : {
          products: state.products.map(res => (
            res.id === item.id ? { ...res, inCart: false, quantity: 0 } : res
          )),
          cart: state.cart.filter((res => res.id !== item.id))
        }
    }
    case TYPES.CLEAR_CART: {
      let item = state.cart.find(res => res.id === action.payload)
      return {
        products: state.products.map(res => (
          res.id === item.id ? { ...res, inCart: false } : res
        )),
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.OFF__LOADER: {
      return {
        ...state,
        isLoading: false
      }
    }
    default:
      return state
  }
}