import { createContext, useState } from "react";


export const ModalContexto = createContext()

function ModalContextProvider({ children }) {

  const [isOpen, setIsOpen] = useState(false)
  const data = { isOpen, setIsOpen }

  return (
    <ModalContexto.Provider value={data}>
      {children}
    </ModalContexto.Provider>
  )
}


export default ModalContextProvider

