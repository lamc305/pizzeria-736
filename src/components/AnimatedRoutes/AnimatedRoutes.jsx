import Home from '../../Page/Home'
import Menu from '../../Page/Menu'
import Cart from '../../Page/Cart'
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';


function AnimatedRoutes() {

  const location = useLocation()
  return (
    <AnimatePresence location={location} key={location.pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes