/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/logo.jpg'
import './menu.css'
import { useContext, useState } from 'react';
import ListOfBebidas from '../../components/MenuComponents/ListOfBebidas';
import ListOfEmpanadas from '../../components/MenuComponents/ListOfEmpanada';
import { Link } from 'react-router-dom';
import { ReducerContext } from '../../contexto/reducerContext';
import ListOfPizza from '../../components/MenuComponents/ListOfPizza';
import { motion } from 'framer-motion'
import { useEffect } from 'react';
import { getProducts } from '../../services/getItems';
import { TYPES } from '../../action/actionReducer';
import { ModalContexto } from '../../contexto/modalContext'
import ModalMenu from '../../components/MenuComponents/ModalMenu';
import { SpinnerMenu } from '../../components/Spinner';
import CartIcon from '../../assets/CartIcon';
import { useInView } from 'react-intersection-observer';
function Menu() {

  const { dispatch, pizza, empanada, bebida, postre, state } = useContext(ReducerContext)
  const [toggleList, setToggleList] = useState("#")
  const data = useContext(ModalContexto)
  const [ref, inView] = useInView()
  const [ref2, inView2] = useInView()
  const [ref3, inView3] = useInView()
  const [ref4, inView4] = useInView()
  const { setIsOpen } = data

  const handleClass = (index) => {
    setToggleList(index)
  }
  const handleVisibility = () => {
    setIsOpen(true)
    setTimeout(() => setIsOpen(false), 2000)
  }

  useEffect(() => {
    getProducts().then(res => dispatch({ type: TYPES.CALL_API, payload: res }))
    if (inView) setToggleList('#')
    if (inView2) setToggleList('#Empanadas')
    if (inView3) setToggleList('#Bebidas')
    if (inView4) setToggleList('#Postres')
  }, [dispatch, state.product, inView, inView2, inView3, inView4])

  const toggleClass1 = toggleList === '#Empanadas' ? 'tabs__menu--active' : null
  const toggleClass2 = toggleList === '#Postres' ? 'tabs__menu--active' : null
  const toggleClass3 = toggleList === '#Bebidas' ? 'tabs__menu--active' : null
  const toggleClass4 = toggleList === '#' ? 'tabs__menu--active' : null


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <div>
        <header className='header__menu'>

          <div>
            <h1>Don Remolo</h1>
            <p>La mejor pizza de colegiales!</p>
            <p>Te llevamos tu pizza Martes a domingo de 11.30 a 23.00</p>
          </div>
          <Link to='/' className='header__logo'>
            <img className='header__logo' src={logo} alt="logo" />
          </Link>
        </header>
      </div>
      <div className='tabs__menu'>
        <div><a href='#' className={toggleClass4} onClick={() => handleClass("#")}>Pizzas</a></div>
        <div><a href='#Empanadas' className={toggleClass1} onClick={() => handleClass('#Empanadas')}>Empanadas</a></div>
        <div><a href='#Bebidas' className={toggleClass3} onClick={() => handleClass('#Bebidas')}>Bebidas</a></div>
        <div><a href='#Postres' className={toggleClass2} onClick={() => handleClass('#Postres')}>Postres</a></div>
        <div className='iconContainer'>
          {state.cart.length === 0 ?
            <div className='tabs__cartIcon' onClick={handleVisibility}>
              <CartIcon />
            </div> :
            <Link to='/cart' className='tabs__cartIcon'>
              <span>{state.cart.length > 0 ? state.cart.length : null}</span>
              <CartIcon />
            </Link>}
        </div>
        <ModalMenu />
      </div>
      {state.isLoading === true ?
        <SpinnerMenu />
        :
        <>
          <ListOfPizza state={pizza} name="Pizzas" referencia={ref} />
          <ListOfEmpanadas state={empanada} name='Empanadas' referencia={ref2} />
          <ListOfBebidas state={bebida} name='Bebidas' referencia={ref3} />
          <ListOfBebidas state={postre} name='Postres' referencia={ref4} />
        </>
      }
    </motion.div>
  )
}

export default Menu