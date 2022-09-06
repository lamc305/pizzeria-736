import { useContext } from "react"
import { ReducerContext } from "../../contexto"
import './cart.css'

function Cart() {

  const { state } = useContext(ReducerContext)

  return (
    <>
      <div>
        {state.cart.map(({name, id, description, price, quantity}) => (
          <div className='items__cart'>
            <h2>{name}</h2>
            <h3>{description}</h3>
            <h4>${price} x {quantity} = ${price * quantity}</h4>
          </div>
        ))}
      </div>
    </>
  )
}

export default Cart