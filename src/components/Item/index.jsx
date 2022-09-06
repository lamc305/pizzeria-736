import './item.css'
import imageNotFound from '../../assets/image-not-found-icon.svg'
function Items({ description, name, id, price }) {
  return (
    <div className='item' id={id}>
      <div className='item__header'>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h2 className='item__header--textAling'>${price}</h2>
        <img src={imageNotFound} alt={name} />
      </div>
      <div className='item__buttons'>
        <div className='item__buttonLeft'>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
        <div className='item_buttonRight'>
          <button>Pedir</button>
        </div>
      </div>
    </div>
  )
}

export default Items