import React from "react";
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
            iure nostrum. Qui minima ratione quo natus beatae cum similique
            molestias ea internos deserunt et voluptatem impedit ut quia quasi
            est provident possimus. Et temporibus ullam et nisi ducimus et
            reprehenderit nostrum in galisum sint et eveniet provident ut labore
            quasi et sunt voluptate
          </p>
        </div>
        <div className="container__toMenu">
          <h3 className="container__title2">Don Remolo</h3>
          <p className="container__paragraph2">La mejor pizza de colegiales!</p>
          <button className="container__btn" type="button">
            Hace tu pedido
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
