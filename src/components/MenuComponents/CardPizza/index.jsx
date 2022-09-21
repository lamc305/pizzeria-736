import './pizza.css'
import ButtonPlusMinus from '../ButtonPlusMinus'
import { TYPES } from '../../../action/actionReducer'
import { useContext } from 'react'
import { ReducerContext } from '../../../contexto/reducerContext'

function CardPizza({ price, name, id, description, img, quantity, inCart }) {

  const { dispatch } = useContext(ReducerContext)

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  }

  return (
    <div className='item' id={id}>
      <div className='item__header'>
        <div className='item__header--text'>
          <h2>{name}</h2>
        </div>
        <h3>{description}</h3>
        <h2 className='item__price'>${price}</h2>
        <img className='item__image' loading='lazy' src={img} alt={name} />
      </div>
      <div className='item__buttons'>
        <ButtonPlusMinus quantity={quantity} id={id} />
        <button className={`item__buttons--right ${inCart ? 'inCart' : null} `} onClick={() => addToCart(id)}>{inCart ? 'Pedido' : 'Pedir'}</button>
      </div>
    </div>
  )
}

export default CardPizza