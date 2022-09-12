import { useContext } from 'react'
import { ModalContexto } from '../../contexto/modalContext'
import './modal.css'
import logo from '../../assets/logo.jpg'
import { motion } from 'framer-motion'
function Modal() {

  const data = useContext(ModalContexto)
  const { isOpen, setIsOpen } = data

  const handleModal = () => {
    setIsOpen(null)
  }
  return (
    <motion.div className={`modal ${isOpen}`}
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <div className='modal__container' onClick={handleModal}>
        <p>Tu pedido ya ha sido concretado a la brevedad recibiras un whatsapp de Don Remolo.</p>
        <div className='modal__footer'>
          <p>¡Gracias por confiar en nosotros!</p>
          <img src={logo} className='modal__logo' alt="" />
        </div>
      </div>
    </motion.div >
  )
}

export default Modal