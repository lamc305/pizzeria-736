import { useContext } from "react"
import { ReducerContext } from "../../contexto"
import './cart.css'
import Form from "../../components/FormEnvio/form"

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

      <Form></Form>
    </>
  )
}

export default Cart