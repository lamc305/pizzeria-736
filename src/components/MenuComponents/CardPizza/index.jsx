import './pizza.css'
import { useState } from 'react'
import ButtonPlusMinus from '../ButtonPlusMinus'
import { TYPES } from '../../../action/actionReducer'
import { useContext } from 'react'
import { ReducerContext } from '../../../contexto/reducerContext'

function CardPizza({ price, name, id, description, image, quantity }) {

  const [togglePizza, setTogglePizza] = useState(1)
  const { dispatch } = useContext(ReducerContext)
  const handleClass = (index) => {
    setTogglePizza(index)
  }

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })
  }

  const classNameActive1 = togglePizza === 1 ? 'item___list--active' : null
  const classNameActive2 = togglePizza === 2 ? 'item___list--active' : null
  const classNameActive3 = togglePizza === 3 ? 'item___list--active' : null

  return (
    <div className='item' id={id}>
      <div className='item__header'>
        <div className='item__header--text'>
          <h2>{name}</h2>
        </div>
        <h3>{description}</h3>
        <h2 className='item__price'>${price}</h2>
        <div>
          <ul className='item__list'>
            <li className={classNameActive1} onClick={() => handleClass(1)}>Chica</li>
            <li className={classNameActive2} onClick={() => handleClass(2)}>Grande</li>
            <li className={classNameActive3} onClick={() => handleClass(3)}>1/2 Pizza</li>
          </ul>
        </div>
        <img className='item__image' loading='lazy' src={image} alt={name} />
      </div>
      <div className='item__buttons'>
        <ButtonPlusMinus quantity={quantity} id={id} />
        <button className='item__buttons--right' onClick={() => addToCart(id)}>Pedir</button>
      </div>
    </div>
  )
}

export default CardPizza