import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Pizza from "../../assets/Pizza.png";
import ButtonWhatsapp from "../../components/HomeComponents/ButtonWhatsapp";
import "./home.css";
import { motion } from 'framer-motion'
function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0, duration: 1 }}
      className='container__home'
    >
      <header className="hero">
        <img src={logo} alt="Logo Pizzeria Don Remolo" className="hero__img" />
      </header>

      <section className="container">
        <div className="container__pizza">
          <img src={Pizza} alt="Pizaa" className="container__img" />
        </div>
        <div className="container__description">
          <h3 className="container__title">Lo que dicen nuestros usuarios</h3>
          <p className="container__paragraph">
            Lorem ipsum dolor sit amet. Sed veritatis rerum et illo porro quo
            ipsa optio aut reiciendis modi rem voluptatibus rerum id laborum
            voluptas ab nobis odit sit amet ullam quo voluptates.
          </p>
          <ButtonWhatsapp />
        </div>

        <div className="container__btn">
            <Link to="/menu">
              <button className="btn">
                Hace tu pedido
              </button>
            </Link>
          </div>

        <div className="container__toMenu">
          <h3 className="container__title2">Don Remolo</h3>
          <p className="container__paragraph2">
            La mejor pizza de colegiales! <br/>
            Te llevamos tu pizza Martes a domingo de 11.30 a 23.00
            </p>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
