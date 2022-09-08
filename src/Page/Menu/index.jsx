import logo from '../../assets/logo.jpg'
import { FaCartArrowDown } from 'react-icons/fa';
import './menu.css'
import { useContext, useEffect } from 'react';
import { getItems } from '../../services/getItems';
import ListOfBebidas from '../../components/ListOfBebidas';
import ListOfEmpanadas from '../../components/ListOfEmpanada';
import { TYPES } from '../../action/actionReducer';
import { Link } from 'react-router-dom';
import { ReducerContext } from '../../contexto';
import ListOfPizza from '../../components/ListOfPizza';


function Menu() {

  const { state, dispatch } = useContext(ReducerContext)

  useEffect(() => {
    Promise.all(getItems).then(res => dispatch({ type: TYPES.CALL_API, payload: res }))
  }, [dispatch])

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
        <div> Pizzas</div>
        <div><a href='#Empanadas' >Empanadas</a></div>
        <div><a href='#Postres' >Postres</a></div>
        <div><a href='#Bebidas' >Bebidas</a></div>
        <div><Link to='/cart' className='tabs__cartIcon'><FaCartArrowDown /></Link></div>
      </div>
      <ListOfPizza state={state.products.pizzas} />
      <ListOfEmpanadas state={state.products.empanadas} name='Empanadas' />
      <ListOfBebidas state={state.products.bebidas} name='Bebidas' />
      <ListOfBebidas state={state.products.postres} name='Postres' />
    </>
  )
}

export default Menu