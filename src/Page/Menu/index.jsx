import logo from '../../assets/logo.jpg'
import { FaCartArrowDown } from 'react-icons/fa';
import './menu.css'
import { useContext, useEffect } from 'react';
import { getItems } from '../../services/getItems';
import ListOfItems from '../../components/ListOfItems';
import { TYPES } from '../../action/actionReducer';
import { Link } from 'react-router-dom';
import { ReducerContext } from '../../contexto';


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
        <div>Pizzas</div>
        <div>Empanadas</div>
        <div>Postres</div>
        <div>Bebidas</div>
        <div><Link to='/cart' className='tabs__cartIcon'><FaCartArrowDown /></Link></div>
      </div>
      <ListOfItems state={state.products.pizzas} />
      <ListOfItems state={state.products.empanadas} name='Empanadas' />
      <ListOfItems state={state.products.postres} name='Postres' />
      <ListOfItems state={state.products.bebidas} name='Bebidas' />
    </>
  )
}

export default Menu