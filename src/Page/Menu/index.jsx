/* eslint-disable jsx-a11y/anchor-is-valid */
import './menu.css'
import { useContext, useEffect } from 'react';
import { ReducerContext } from '../../contexto/reducerContext';
import { motion } from 'framer-motion'
import { getProducts } from '../../services/getItems';
import { TYPES } from '../../action/actionReducer';
import Header from '../../components/MenuComponents/Header';
import Tabs from '../../components/MenuComponents/Tabs';
import AllMenu from '../../components/MenuComponents/AllMenu';
import { ScrollContextProviver } from '../../contexto/scrollSpyContext';
function Menu() {

  const { dispatch } = useContext(ReducerContext)



  useEffect(() => {
      getProducts().then(res => dispatch({ type: TYPES.CALL_API, payload: res }))
  }, [dispatch])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0, duration: 1 }}
    >
      <Header />
      <ScrollContextProviver>
        <Tabs />
        <AllMenu />
      </ScrollContextProviver>
    </motion.div>
  )
}

export default Menu