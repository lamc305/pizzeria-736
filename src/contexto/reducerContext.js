import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { appReducer, initialStateApp } from "../reducer/appReducer";

export const ReducerContext = createContext()

export const ReducerContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialStateApp)

  useEffect(() => {
    sessionStorage.setItem('stateProductsPizza', JSON.stringify(state.products))
    sessionStorage.setItem('stateCartPizza', JSON.stringify(state.cart))
  }, [state])

  const pizza = state.products && state.products.filter(res => res.category === 'Pizzas')
  const bebida = state.products && state.products.filter(res => res.category === 'Bebidas')
  const postre = state.products && state.products.filter(res => res.category === 'Postres')
  const empanada = state.products && state.products.filter(res => res.category === 'Empanadas')

  const data = { state, dispatch, pizza, bebida, postre, empanada }
  return (
    <ReducerContext.Provider value={data}>
      {children}
    </ReducerContext.Provider>
  )
}