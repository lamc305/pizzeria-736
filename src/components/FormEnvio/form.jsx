import "./form.css";

function form() {
  return (
    <section className="container__form">
      <form className="form">
        <h2 className="form__title">¿A donde llevamos el pedido?</h2>
        <input
          type="text"
          className="form__input form__input--long"
          placeholder="Calle"
        />
        <input type="text" className="form__input" placeholder="Numero" />
        <input type="text" className="form__input" placeholder="Piso" />
        <input type="text" className="form__input" placeholder="Celular" />
        <input
          type="text"
          className="form__input form__input--separate"
          placeholder="Código postal"
        />
        <input
          type="tel"
          className="form__input form__input--separate"
          placeholder="Departamento"
        />
        <h3 className="form__title2">¿Algo que debamos saber?</h3>
        <textarea className="form__texto"></textarea>
      </form>
      <div className="container__orderComplete">
        <div className="container__subTotal">
          <p className="text__order">Subtotal</p>
          <p className="text__price">$1630</p>
          <input type="text" placeholder="Código de descuento" />
        </div>

        <div className="container__Total">
          <p className="text__modified">Total</p>
          <p className="text__price2">$1630</p>
          <button className="btn__order">Concreta tu pedido</button>
          <p className="paragraph">Al concretar tu pedido te llegara el contacto al whatsapp.</p>
          <p className="text__modified2">¡Gracias!</p>
        </div>
      </div>
    </section>
  );
}

export default form;
