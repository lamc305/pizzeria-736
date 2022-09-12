import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import SpinnerWait from "../Spinner";

const Home = lazy(() => import('../../Page/Home'))
const Menu = lazy(() => import('../../Page/Menu'))
const Cart = lazy(() => import('../../Page/Cart'))
function AnimatedRoutes() {

  const location = useLocation()
  return (
    <AnimatePresence location={location} key={location.pathname}>
      <Suspense fallback={<SpinnerWait />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default AnimatedRoutes