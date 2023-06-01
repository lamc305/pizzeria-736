import { useEffect, useRef, useState } from "react"
import { createContext } from "react"
import { useInView } from "react-intersection-observer"

export const ScrollContext = createContext()


export const ScrollContextProviver = ({ children }) => {


  const [toggleList, setToggleList] = useState('Pizzas')
  const [ref, inView] = useInView()
  const [ref2, inView2] = useInView()
  const [ref3, inView3] = useInView()
  const [ref4, inView4] = useInView()
  const refPizzas = useRef(null)
  const refEmpanadas = useRef(null)
  const refBebidas = useRef(null)
  const refPostres = useRef(null)


  const data = { ref, ref2, ref3, ref4, toggleList, setToggleList, refPizzas, refEmpanadas, refBebidas, refPostres }

  useEffect(() => {
    if (inView) setToggleList('Pizzas')
    if (inView2) setToggleList('Empanadas')
    if (inView3) setToggleList('Bebidas')
    if (inView4) setToggleList('Postres')
  }, [inView, inView2, inView3, inView4, setToggleList])

  return (
    <ScrollContext.Provider value={data} >
      {children}
    </ScrollContext.Provider>
  )
}