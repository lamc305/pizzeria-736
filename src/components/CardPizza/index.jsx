import './pizza.css'
import { useContext, useState } from 'react'
import { ReducerContext } from '../../contexto'
import { TYPES } from '../../action/actionReducer'
import { HiPlus, HiMinus } from 'react-icons/hi'
function CardPizza({ description, name, id, price, img }) {

  const { dispatch } = useContext(ReducerContext)
  const [togglePizza, setTogglePizza] = useState(1)
  const addToCart = (id, name, price, img, description) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: { id, name, price, img, description } })
  }


  const handleClass = (index) => {
    setTogglePizza(index)
  }


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
            <li className={togglePizza === 1 ? 'item___list--active' : null} onClick={() => handleClass(1)}>Chica</li>
            <li className={togglePizza === 2 ? 'item___list--active' : null} onClick={() => handleClass(2)}>Grande</li>
            <li className={togglePizza === 3 ? 'item___list--active' : null} onClick={() => handleClass(3)}>1/2 Pizza</li>
          </ul>
        </div>
        <img className='item__image' src={img} alt={name} />
      </div>
      <div className='item__buttons'>
        <div>
          <button className='item__buttons--left'><HiMinus /></button>
          <button className='item__buttons--center'>0</button>
          <button className='item__buttons--left'><HiPlus /></button>
        </div>
        <button className='item__buttons--right' onClick={() => addToCart(id, name, price, img, description)}>Pedir</button>
      </div>
    </div>
  )
}

export default CardPizza