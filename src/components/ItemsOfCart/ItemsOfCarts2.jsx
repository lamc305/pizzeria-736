import './carrito.css'
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi"

function ItemsOfCart2({ name, price, description, img }) {
  return (
    <section className='carrito'>
      <div className='carrito__image'>
        <img src={img} loading='lazy' alt="product" />
      </div>
      <div className="carrito__text">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="carrito__Buttons">
        <div className='items__buttonsLeft'>
          <button className=''><HiMinus /></button>
          <button className=''>0</button>
          <button className=''><HiPlus /></button>
        </div>
      </div>
      <div className='carrito__priceTrash'>
        <h2>${price}</h2>
        <button>
          <HiOutlineTrash />
        </button>
      </div>
    </section >
  )
}

export default ItemsOfCart2