import { HiPlus } from 'react-icons/hi'
import './listOfItemsInCart.css'
import { Link } from 'react-router-dom'
import ItemsOfCart from '../ItemsOfCart'
import { useContext } from 'react'
import { ReducerContext } from '../../../contexto/reducerContext'

function ListOfItemsInCart() {
  const { state } = useContext(ReducerContext)
  const { cart } = state


  return (

    <section className='itemsOfCart__container'>
      <Link to='/'>
        Volver al menú
        <button className='itemOfCart__button'><HiPlus /></button>
      </Link>
      {cart.length === 0 ? <h2 className='itemsOfCart__empty'>There is no products</h2> : cart.map(({ name, price, description, image, quantity, id }) => (
        <ItemsOfCart
          key={id}
          id={id}
          name={name}
          description={description}
          price={price}
          image={image}
          quantity={quantity}
        />
      ))
      }
    </section>
  )
}

export default ListOfItemsInCart