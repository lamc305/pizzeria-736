import './stylesOfCards.css'
import { useContext } from 'react'
import { ReducerContext } from '../../contexto/reducerContext'
import { TYPES } from '../../action/actionReducer'
import { HiPlus, HiMinus } from 'react-icons/hi'
function CardEmpanada({ description, name, id, price, img }) {

  const { dispatch } = useContext(ReducerContext)

  const addToCart = (id, name, price, img, description) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: { id, name, price, img, description } })
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
        <div className='items___buttonsLeft'>
            <button className='item__buttons--left'><HiMinus /></button>
            <button className='item__buttons--center'>0</button>
            <button className='item__buttons--left'><HiPlus /></button>
        </div>
        <button className='item__buttons--right' onClick={() => addToCart(id, name, price, img, description)}>Pedir</button>
      </div>
    </div>
  )
}

export default CardEmpanada