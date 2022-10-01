import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg'
import './stylesHeader.css'

function Header() {
  return (
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
  )
}

export default Header