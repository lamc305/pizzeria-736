import { useContext } from "react"
import { HiMinus, HiPlus } from "react-icons/hi"
import { TYPES } from "../../../action/actionReducer"
import { ReducerContext } from "../../../contexto/reducerContext"
import './styles.css'
function ButtonPlusMinus(props) {
  const { dispatch } = useContext(ReducerContext)
  const handleMinus = (props) => {
    dispatch({ type: TYPES.ADD_ONE, payload: props })
  }

  return (
    <div className='items___buttonsLeft'>
      <button className='item__buttons--left' onClick={() => handleMinus(props)}><HiMinus /></button>
      <button className='item__buttons--center'>0</button>
      <button className='item__buttons--left'><HiPlus /></button>
    </div>
  )
}

export default ButtonPlusMinus