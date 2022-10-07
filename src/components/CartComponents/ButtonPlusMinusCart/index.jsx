import { useContext } from "react"
import { HiMinus, HiPlus } from "react-icons/hi"
import { TYPES } from "../../../action/actionReducer"
import { ReducerContext } from "../../../contexto/reducerContext"
import '../../MenuComponents/ButtonPlusMinus/styles.css'
function ButtonPlusMinusCart({ id, quantity }) {

  const { dispatch } = useContext(ReducerContext)

  const handlePlus = (id) => {
    dispatch({ type: TYPES.ADD_ONE_IN_CART, payload: id })
  }

  const handleMinus = (id) => {
    dispatch({ type: TYPES.REMOVE_ONE_IN_CART, payload: id })
  }



  return (
    <div className='items___buttonsLeft'>
      <button className='item__buttons--left' onClick={() => handleMinus(id)}><HiMinus /></button>
      <button className='item__buttons--center'>{quantity}</button>
      <button className='item__buttons--left' onClick={() => handlePlus(id)}><HiPlus /></button>
    </div>
  )
}

export default ButtonPlusMinusCart