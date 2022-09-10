import { useContext } from "react"
import ListOfItemsInCart from "../../components/ListOfItemsInCart"
import { ReducerContext } from "../../contexto"
import './cart.css'
import Form from "../../components/FormEnvio/form"
import logo from '../../assets/logo.jpg'
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

function Cart() {

  const { state } = useContext(ReducerContext)
  const { cart } = state
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='cart__header'>
        <Link to='/'>
          <img className="cart__headerLogo" src={logo} alt='logo' />
        </Link>
      </div>
  <ListOfItemsInCart cart={cart} />
  <Form />
    </motion.div>

  )
}

export default Cart