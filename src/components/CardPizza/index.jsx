import './pizza.css'
import { useContext, useState } from 'react'
import { ReducerContext } from '../../contexto/reducerContext'
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

export default CardPizza