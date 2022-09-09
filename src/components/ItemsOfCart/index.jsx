import './itemsOfCart.css'
import { HiMinus, HiPlus } from 'react-icons/hi'
function ItemsOfCart({ name, price, description, img }) {
  return (
    <div className='itemsOfCart__product' >
      <img className='itemsOfCart__image' src={img} alt="product" />
      <div className='itemsOfCart__text'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className='items__buttonsCart'>
        <div>
          <button className='item__buttons--left'><HiMinus /></button>
          <button className='item__buttons--center'>0</button>
          <button className='item__buttons--left'><HiPlus /></button>
        </div>
      </div>
      <div className='itemsOfCart__price'>
        <h2>${price}</h2>
      </div>
    </div>
  )
}

export default ItemsOfCart