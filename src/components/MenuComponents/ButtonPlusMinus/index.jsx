import { useContext } from "react"
import { HiMinus, HiPlus } from "react-icons/hi"
import { TYPES } from "../../../action/actionReducer"
import { ReducerContext } from "../../../contexto/reducerContext"
import './styles.css'
function ButtonPlusMinus({ id, quantity, inCart }) {
  const { dispatch } = useContext(ReducerContext)

  const addItem = (id) => {
    if (inCart) {
      dispatch({ type: TYPES.ADD_ONE_IN_CART, payload: id })
    } else {
      dispatch({ type: TYPES.ADD_ONE, payload: id })
    }
  }

  const deleteItem = id => {
    if (inCart) {
      dispatch({ type: TYPES.REMOVE_ONE_IN_CART, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE, payload: id })
    }
  }


  return (
    <div className='items___buttonsLeft'>
      <button className='item__buttons--left' onClick={() => deleteItem(id)}><HiMinus /></button>
      <button className='item__buttons--center'>{quantity}</button>
      <button className='item__buttons--left' onClick={() => addItem(id)}><HiPlus /></button>
    </div>
  )
}

export default ButtonPlusMinus