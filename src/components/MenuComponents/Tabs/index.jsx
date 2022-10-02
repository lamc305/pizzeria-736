import { useContext } from "react"
import { Link } from "react-router-dom"
import CartIcon from "../../../assets/CartIcon"
import { ModalContexto } from "../../../contexto/modalContext"
import { ReducerContext } from "../../../contexto/reducerContext"
import { ScrollContext } from "../../../contexto/scrollSpyContext"
import ModalMenu from "../ModalMenu"

function Tabs() {

  const { state } = useContext(ReducerContext)
  const data = useContext(ModalContexto)
  const { setIsOpen } = data
  const { toggleList, setToggleList, refPizzas, refEmpanadas, refBebidas, refPostres } = useContext(ScrollContext)

  const handleVisibility = () => {
    setIsOpen(true)
    setTimeout(() => setIsOpen(false), 2000)
  }

  const toggleClass1 = toggleList === 'Empanadas' ? 'tabs__menu--active' : null
  const toggleClass2 = toggleList === 'Postres' ? 'tabs__menu--active' : null
  const toggleClass3 = toggleList === 'Bebidas' ? 'tabs__menu--active' : null
  const toggleClass4 = toggleList === 'Pizzas' ? 'tabs__menu--active' : null

  const handleClick = (event) => {
    let key = event.target.innerHTML
    switch (key) {
      case 'Pizzas':
        setToggleList('Pizzas')
        refPizzas.current?.scrollIntoView({ behavior: 'smooth' })
        break;
      case 'Empanadas':
        setToggleList('Empanadas')
        refEmpanadas.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Postre':
        setToggleList('Postres')
        refPostres.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Bebidas':
        setToggleList('Bebidas')
        refBebidas.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'Postres':
        setToggleList('Postres')
        refPostres.current?.scrollIntoView({ behavior: 'smooth' })
        break
      default:
        break
    }
  }

  return (
    <div className='tabs__menu'>
      <div><p onClick={handleClick} className={toggleClass4}>Pizzas</p></div>
      <div><p onClick={handleClick} className={toggleClass1}>Empanadas</p></div>
      <div><p onClick={handleClick} className={toggleClass3}>Bebidas</p></div>
      <div><p onClick={handleClick} className={toggleClass2}>Postres</p></div>
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
  )
}

export default Tabs