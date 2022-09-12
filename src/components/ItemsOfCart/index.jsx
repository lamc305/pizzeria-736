import './itemsOfCart.css'
import { HiMinus, HiOutlineTrash, HiPlus } from 'react-icons/hi'

function ItemsOfCart({ name, price, description, img }) {

  return (
    <div className='itemsOfCart__product' >
      <div className='itemsOfCart__image' >
        <img src={img} loading='lazy' alt="product" />
      </div>
      <div className='itemsOfCart__text'>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <div className='items__buttonsCart'>
          <div className='items___buttonsLeft'>
            <button className='item__buttons--left'><HiMinus /></button>
            <button className='item__buttons--center'>0</button>
            <button className='item__buttons--left'><HiPlus /></button>
          </div>
        </div>
      </div>
      <div className='itemsOfCart__price'>
        <h2>${price}</h2>
        <div className='itemsOfCart__iconTrash'>
          <HiOutlineTrash />
        </div>
      </div>
    </div>
  )
}

export default ItemsOfCart