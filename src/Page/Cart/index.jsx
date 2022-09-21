import ListOfItemsInCart from "../../components/CartComponents/ListOfItemsInCart"
import './cart.css'
import FormEnvio from '../../components/CartComponents/FormEnvio'
import logo from '../../assets/logo.jpg'
import { Link, Navigate } from "react-router-dom"
import { motion } from 'framer-motion'
import Modal from "../../components/CartComponents/ModalCart"
import { useContext, useEffect } from "react"
import ModalContextProvider from "../../contexto/modalContext"
import { ReducerContext } from "../../contexto/reducerContext"

function Cart() {

  const { state } = useContext(ReducerContext)

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  if (state.cart.length === 0) return <Navigate to='/' />
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
        <ListOfItemsInCart />
        <FormEnvio />
      </ModalContextProvider>
    </motion.div>
  )
}

export default Cart