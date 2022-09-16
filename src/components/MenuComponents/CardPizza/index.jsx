import './pizza.css'
import { useContext, useState } from 'react'
import { ReducerContext } from '../../../contexto/reducerContext'
import { TYPES } from '../../../action/actionReducer'
import ButtonPlusMinus from '../ButtonPlusMinus'

function CardPizza(props) {

  const cargarImagen = require.context("../../../assets", true);
  const { dispatch } = useContext(ReducerContext)
  const [togglePizza, setTogglePizza] = useState(1)
  const addToCart = (id, name, price, image, description) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: { id, name, price, image, description } })
  }


  const handleClass = (index) => {
    setTogglePizza(index)
  }

  const classNameActive1 = togglePizza === 1 ? 'item___list--active' : null
  const classNameActive2 = togglePizza === 2 ? 'item___list--active' : null
  const classNameActive3 = togglePizza === 3 ? 'item___list--active' : null

  return (
    <div className='item' id={props.id}>
      <div className='item__header'>
        <div className='item__header--text'>
          <h2>{props.name}</h2>
        </div>
        <h3>{props.description}</h3>
        <h2 className='item__price'>${props.price}</h2>
        <div>
          <ul className='item__list'>
            <li className={classNameActive1} onClick={() => handleClass(1)}>Chica</li>
            <li className={classNameActive2} onClick={() => handleClass(2)}>Grande</li>
            <li className={classNameActive3} onClick={() => handleClass(3)}>1/2 Pizza</li>
          </ul>
        </div>
        <img className='item__image' loading='lazy' src={cargarImagen(props.image)} alt={props.name} />
      </div>
      <div className='item__buttons'>
        <ButtonPlusMinus category='pizzas' {...props} />
        <button className='item__buttons--right' onClick={() => addToCart(props)}>Pedir</button>
      </div>
    </div>
  )
}

export default CardPizza