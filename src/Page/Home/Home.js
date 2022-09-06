import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import Pizza from "../../assets/Pizza.png";
import "./home.css";

function Home() {
  return (
    <>
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
          <button className="container__btn">Hace tu pedido</button>
        </div>
      </section>

      <div className="joinchat">
        <div className="joinchat__button"></div>
      </div>
    </>
  );
}

export default Home;
