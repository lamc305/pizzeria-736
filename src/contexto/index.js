import { createContext, useReducer } from "react";
import { appReducer, initialStateApp } from "../reducer/appReducer";

export const ReducerContext = createContext()


export const ReducerContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(appReducer, initialStateApp)

  const data = { state, dispatch }

  return (
    <ReducerContext.Provider value={data}>
      {children}
    </ReducerContext.Provider>
  )
}