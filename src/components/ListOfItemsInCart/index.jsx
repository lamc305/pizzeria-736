import ItemsOfCart from '../ItemsOfCart'
import { HiPlus } from 'react-icons/hi'
import './listOfItemsInCart.css'
import { Link } from 'react-router-dom'

function ListOfItemsInCart({ cart }) {


  return (

    <section className='itemsOfCart__container'>
      <Link to='/menu'>

        <button className='itemOfCart__button'><HiPlus /></button>
      </Link>
      {cart && cart.map(({ name, price, description, img }) => (
        <ItemsOfCart
          key={name}
          name={name}
          description={description}
          price={price}
          img={img}
        />
      ))
      }
    </section>
  )
}

export default ListOfItemsInCart