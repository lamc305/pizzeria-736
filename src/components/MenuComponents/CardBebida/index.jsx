import { useContext } from 'react'
import { ReducerContext } from '../../../contexto/reducerContext'
import { TYPES } from '../../../action/actionReducer'
import '../CardEmpanada/styles.css'
import ButtonPlusMinus from '../ButtonPlusMinus'
function CardBebida({ description, name, id, price, image }) {

  const { dispatch } = useContext(ReducerContext)
  const cargarImagen = require.context("../../../assets", true);
  const addToCart = (id, name, price, image, description) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: { id, name, price, image, description } })
  }

  return (
    <div className='item' id={id}>
      <div className='item__header'>
        <div className='item__header--text'>
          <h2>{name}</h2>
          <h2>${price}</h2>
        </div>
        <h3>{description}</h3>
        <img className='item__image' loading='lazy' src={cargarImagen(image)} alt={name} />
      </div>
      <div className='item__buttons'>
        <ButtonPlusMinus />
        <button className='item__buttons--right' onClick={() => addToCart(id, name, price, image, description)}>Pedir</button>
      </div>
    </div >
  )
}

export default CardBebida