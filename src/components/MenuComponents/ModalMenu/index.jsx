import { useContext } from 'react'
import { ModalContexto } from '../../../contexto/modalContext'
import './styles.css'

function ModalMenu() {

  const { isOpen, setIsOpen } = useContext(ModalContexto)

  const handleModal = () => {
    setIsOpen(false)
  }
  return (
    <div
      className={`modal__containerMenu ${isOpen ? 'isOpen' : ''}`}
      onClick={handleModal}
    >
      <p>El pedido no fue realizado aún</p>
    </div>
  )
}

export default ModalMenu