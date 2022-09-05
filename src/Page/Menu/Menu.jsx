import logo from '../../assets/logo.jpg'
import { FaCartArrowDown } from 'react-icons/fa';
import './menu.css'
import { useEffect, useReducer } from 'react';
import { getItems } from '../../services/getItems';
import Items from '../../components/Items';

const TYPES = {
  CALL_API: 'FETCH_SUCESS'

}

function Menu() {

  const appReducer = (state, action) => {
    switch (action.type) {
      case TYPES.CALL_API:
        return {
          ...state,
          pizzas: action.payload[0],
          empanadas: action.payload[1],
          postres: action.payload[2],
          bebidas: action.payload[3]
        }
      default:
        return state
    }
  }


  const initialState = {
    pizzas: {},
    empanadas: {},
    postres: {},
    bebidas: {},
    cart: []
  }


  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    Promise.all(getItems).then(res => dispatch({ type: TYPES.CALL_API, payload: res }))
  }, [])

  console.log(state.pizzas)
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
      <section className='pizzas'>
        {state.empanadas && state.empanadas.map(({ description, name, id, price }) => (
          <Items
            description={description}
            id={id}
            key={id}
            name={name}
            price={price}
          />
        ))}
      </section>
    </>
  )
}

export default Menu