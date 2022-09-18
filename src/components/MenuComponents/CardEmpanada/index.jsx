import './stylesOfCards.css'
import { useContext } from 'react'
import { ReducerContext } from '../../contexto/reducerContext'
import { TYPES } from '../../action/actionReducer'
import ButtonPlusMinus from '../ButtonPlusMinus'

function CardEmpanada({ description, name, id, price, image, quantity }) {

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
        <img className='item__image' loading='lazy' src={image} alt={name} />
      </div>
      <div className='item__buttons'>
        <ButtonPlusMinus quantity={quantity} id={id} />
        <button className='item__buttons--right' onClick={() => addToCart(id)}>Pedir</button>
      </div>
    </div >
  )
}

export default CardEmpanada