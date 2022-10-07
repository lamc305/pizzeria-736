import { useContext } from 'react'
import { ReducerContext } from '../../../contexto/reducerContext'
import { TYPES } from '../../../action/actionReducer'
import '../CardEmpanada/styles.css'
import ButtonPlusMinus from '../ButtonPlusMinus'

function CardBebida({ description, name, id, price, img, quantity, inCart }) {

  const { dispatch } = useContext(ReducerContext)

  const itemCart = id => {
    if (inCart) {
      dispatch({ type: TYPES.CLEAR_CART, payload: id })
    } else {
      dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    }
  }
  return (
    <div className='item' id={id}>
      <div className='item__header'>
        <div className='item__header--text'>
          <h2>{name}</h2>
          <h2>${price}</h2>
        </div>
        <h3>{description}</h3>
        <img className='item__image' loading='lazy' src={img} alt={name} />
      </div>
      <div className='item__buttons'>
        <ButtonPlusMinus quantity={quantity} id={id} inCart={inCart} />
        <button className={`item__buttons--right ${inCart ? 'inCart' : null}`} onClick={() => itemCart(id)}>{inCart ? 'Cancelar' : 'Pedir'}</button>
      </div>
    </div >
  )
}

export default CardBebida