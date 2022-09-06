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
      let newItem = state.products.empanadas.find(
        (product) => product.id === action.payload
      );
      let itemInCart = state.cart.find((item) => item.id === newItem.id);

      return itemInCart
        ? {
          ...state,
          cart: state.cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
        : {
          ...state,
          cart: [...state.cart, { ...newItem, quantity: 1 }],
        };
    }
    default:
      return state
  }
}