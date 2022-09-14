import { useContext } from "react"
import ListOfItemsInCart from "../../components/CartComponents/ListOfItemsInCart"
import { ReducerContext } from "../../contexto/reducerContext"
import './cart.css'
import Form from '../../components/CartComponents/FormEnvio'
import logo from '../../assets/logo.jpg'
import ButtonWhatsapp from "../../components/HomeComponents/ButtonWhatsapp"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'
import Modal from "../../components/CartComponents/Modal"
import { useEffect } from "react"
import ModalContextProvider from "../../contexto/modalContext"

function Cart() {

  const { state } = useContext(ReducerContext)
  const { cart } = state

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <ModalContextProvider>
        <Modal />
        <div className='cart__header'>
          <Link to='/'>
            <img className="cart__headerLogo" loading='lazy' src={logo} alt='logo' />
          </Link>
        </div>
        <ListOfItemsInCart cart={cart} />
        <Form />
        <ButtonWhatsapp />
      </ModalContextProvider>
    </motion.div>
  )
}

export default Cart