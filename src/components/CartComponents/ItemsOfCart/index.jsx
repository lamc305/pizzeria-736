import './styles.css'
import { HiOutlineTrash } from "react-icons/hi"
import ButtonPlusMinusCart from '../ButtonPlusMinusCart'
import { useContext } from 'react'
import { ReducerContext } from '../../../contexto/reducerContext'
import { TYPES } from '../../../action/actionReducer'

function ItemsOfCart({ name, price, description, image, quantity, id }) {

  const { dispatch } = useContext(ReducerContext)
  const deleteItem = (id) => {
    dispatch({ type: TYPES.CLEAR_CART, payload: id })
  }

  return (
    <div className='carrito' >
      <div className='carrito__image'>
        <img src={image} loading='lazy' alt="product" />
      </div>
      <div className="carrito__text">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="carrito__Buttons">
        <ButtonPlusMinusCart quantity={quantity} id={id} />
      </div>
      <div className='carrito__priceTrash'>
        <h2>${price * quantity}</h2>
        <button onClick={() => deleteItem(id)}>
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  )
}

export default ItemsOfCart