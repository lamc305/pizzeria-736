/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/logo.jpg'
import { FaCartArrowDown } from 'react-icons/fa';
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

function Menu() {

  const { dispatch, pizza, empanada, bebida, postre } = useContext(ReducerContext)
  const [toggleList, setToggleList] = useState("#")


  const handleClass = (index) => {
    setToggleList(index)
  }


  useEffect(() => {
    getProducts().then(res => dispatch({ type: TYPES.CALL_API, payload: res }))
  }, [dispatch])

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
        <div><a href='#Postres' className={toggleClass2} onClick={() => handleClass('#Postres')}>Postres</a></div>
        <div><a href='#Bebidas' className={toggleClass3} onClick={() => handleClass('#Bebidas')}>Bebidas</a></div>
        <div><Link to='/cart' className='tabs__cartIcon'><FaCartArrowDown /></Link></div>
      </div>

      <ListOfPizza state={pizza} name="Pizzas" />
      <ListOfEmpanadas state={empanada} name='Empanadas' />
      <ListOfBebidas state={bebida} name='Bebidas' />
      <ListOfBebidas state={postre} name='Postres' />
    </motion.div>
  )
}

export default Menu