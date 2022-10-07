import { useContext } from "react"
import { ReducerContext } from "../../../contexto/reducerContext"
import { ScrollContext } from "../../../contexto/scrollSpyContext"
import { SpinnerMenu } from "../../Spinner"
import ListOfBebidas from "../ListOfBebidas"
import ListOfEmpanadas from "../ListOfEmpanada"
import ListOfPizza from "../ListOfPizza"

function AllMenu() {

  const { state, pizza, empanada, bebida, postre } = useContext(ReducerContext)
  const { refPizzas, refBebidas, refEmpanadas, refPostres, ref, ref2, ref3, ref4 } = useContext(ScrollContext)


  return (
    <>
      {
        state.isLoading === true ?
          <SpinnerMenu />
          :
          <>
            <ListOfPizza
              state={pizza}
              name="Pizzas"
              referencia={refPizzas}
              scroll={ref}
            />
            <ListOfEmpanadas
              state={empanada}
              name='Empanadas'
              referencia={refEmpanadas}
              scroll={ref2}
            />
            <ListOfBebidas
              state={bebida}
              name='Bebidas'
              referencia={refBebidas}
              scroll={ref3}
            />
            <ListOfBebidas
              state={postre}
              name='Postres'
              referencia={refPostres}
              scroll={ref4}
            />
          </>
      }
    </>
  )
}

export default AllMenu