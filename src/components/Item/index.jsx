import './item.css'
import imageNotFound from '../../assets/image-not-found-icon.svg'
import { useContext } from 'react'
import { ReducerContext } from '../../contexto'
import { TYPES } from '../../action/actionReducer'

function Items({ description, name, id, price }) {

  const { dispatch } = useContext(ReducerContext)

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })

  }

  return (
    <div className='item' id={id}>
      <div className='item__header'>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h3 className='item__header--price'>${price}</h3>
        <img className='item__image' src={imageNotFound} alt={name} />
      </div>
      <div className='item__buttons'>
        <button onClick={() => addToCart(id)}>Pedir</button>
      </div>
    </div>
  )
}

export default Items