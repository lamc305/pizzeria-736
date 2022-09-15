import { HiMinus, HiPlus } from "react-icons/hi"
import './styles.css'
function ButtonPlusMinus() {
  return (
    <div className='items___buttonsLeft'>
      <button className='item__buttons--left'><HiMinus /></button>
      <button className='item__buttons--center'>0</button>
      <button className='item__buttons--left'><HiPlus /></button>
    </div>
  )
}

export default ButtonPlusMinus