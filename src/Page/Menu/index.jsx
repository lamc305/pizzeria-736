import logo from '../../assets/logo.jpg'
import { FaCartArrowDown } from 'react-icons/fa';
import './menu.css'
import { useEffect, useReducer } from 'react';
import { getItems } from '../../services/getItems';
import ListOfItems from '../../components/ListOfItems';
import { appReducer, initialStateApp } from '../../reducer/appReducer';
import { TYPES } from '../../action/actionReducer';


function Menu() {

  const [state, dispatch] = useReducer(appReducer, initialStateApp)

  useEffect(() => {
    Promise.all(getItems).then(res => dispatch({ type: TYPES.CALL_API, payload: res }))
  }, [])

  return (
    <>
      <div>
        <header className='header-menu'>
          <h1>Don Remolo</h1>
          <img src={logo} alt="logo" />
        </header>
      </div>
      <div className='tabs-menu'>
        <div>Pizzas</div>
        <div>Empanadas</div>
        <div>Postres</div>
        <div>Bebidas</div>
        <div><FaCartArrowDown /></div>
      </div>
      <ListOfItems state={state.pizzas} />
      <ListOfItems state={state.empanadas} name='Empanadas' />
      <ListOfItems state={state.postres} name='Postres' />
      <ListOfItems state={state.bebidas} name='Bebidas' />
    </>
  )
}

export default Menu