import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Pizza from "../../assets/Pizza.png";
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
          <h3 className="container__title">Lo que dicen nuestros usuarios</h3>
          <p className="container__paragraph">
            Lorem ipsum dolor sit amet. Sed veritatis rerum et illo porro quo
            ipsa optio aut reiciendis modi rem voluptatibus rerum. Id laborum
            voluptas ab nobis odit sit amet ullam quo voluptates architecto ad
            iure nostrum.
          </p>
        </div>
        <div className="container__toMenu">
          <h3 className="container__title2">Don Remolo</h3>
          <p className="container__paragraph2">La mejor pizza de colegiales!</p>
          <div className="container__btn">
            <Link to="/menu">
              <button className="btn">
                Hace tu pedido
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div className="joinchat">
        <a href="https://wa.me/5124234234234234?text=Hola,%20estoy%20interesado%20el%20produc
          to,%20quisiera%20una%20porción" target="_blank" rel="noopener noreferrer"><button className="joinchat__button"></button></a>
      </div>
    </motion.div>
  );
}

export default Home;
