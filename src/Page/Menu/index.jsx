/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from '../../assets/logo.jpg'
import { FaCartArrowDown } from 'react-icons/fa';
import './menu.css'
import { useContext, useEffect, useState } from 'react';
import { getItems } from '../../services/getItems';
import ListOfBebidas from '../../components/ListOfBebidas';
import ListOfEmpanadas from '../../components/ListOfEmpanada';
import { TYPES } from '../../action/actionReducer';
import { Link } from 'react-router-dom';
import { ReducerContext } from '../../contexto';
import ListOfPizza from '../../components/ListOfPizza';


function Menu() {

  const { state, dispatch } = useContext(ReducerContext)
  const [toggleList, setToggleList] = useState("#")

  useEffect(() => {
    Promise.all(getItems).then(res => dispatch({ type: TYPES.CALL_API, payload: res }))
  }, [dispatch])

  const handleClas = (index) => {
    setToggleList(index)
  }

  return (
    <>
      <div>
        <header className='header__menu'>
          <h1>Don Remolo</h1>
          <Link to='/' className='header__logo'>
            <img className='header__logo' src={logo} alt="logo" />
          </Link>
        </header>
      </div>
      <div className='tabs__menu'>
        <div><a href='#' className={toggleList === "#" ? 'tabs__menu--active' : null} onClick={() => handleClas("#")}>Pizzas</a></div>
        <div><a href='#Empanadas' className={toggleList === '#Empanadas' ? 'tabs__menu--active' : null} onClick={() => handleClas('#Empanadas')}>Empanadas</a></div>
        <div><a href='#Postres' className={toggleList === '#Postres' ? 'tabs__menu--active' : null} onClick={() => handleClas('#Postres')}>Postres</a></div>
        <div><a href='#Bebidas' className={toggleList === '#Bebidas' ? 'tabs__menu--active' : null} onClick={() => handleClas('#Bebidas')}>Bebidas</a></div>
        <div><Link to='/cart' className='tabs__cartIcon'><FaCartArrowDown /></Link></div>
      </div>

      <ListOfPizza state={state.products.pizzas} name="Pizzas"/>
      <ListOfEmpanadas state={state.products.empanadas} name='Empanadas' />
      <ListOfBebidas state={state.products.postres} name='Postres' />
      <ListOfBebidas state={state.products.bebidas} name='Bebidas' />
    </>
  )
}

export default Menu