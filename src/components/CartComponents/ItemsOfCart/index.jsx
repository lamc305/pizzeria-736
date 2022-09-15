import './styles.css'
import { HiOutlineTrash } from "react-icons/hi"
import ButtonPlusMinus from '../../MenuComponents/ButtonPlusMinus'

function ItemsOfCart({ name, price, description, img }) {
  return (
    <div className='carrito' >
      <div className='carrito__image'>
        <img src={img} loading='lazy' alt="product" />
      </div>
      <div className="carrito__text">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="carrito__Buttons">
        <ButtonPlusMinus />
      </div>
      <div className='carrito__priceTrash'>
        <h2>${price}</h2>
        <button>
          <HiOutlineTrash />
        </button>
      </div>
    </div>
  )
}

export default ItemsOfCart