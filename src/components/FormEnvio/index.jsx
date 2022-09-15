import { useContext } from "react";
import { ModalContexto } from "../../contexto/modalContext";
import "./form.css";

function Form() {

  const data = useContext(ModalContexto)
  const { setIsOpen } = data

  const handleState = () => {
    setIsOpen('is_open')
  }

  return (
    <section className="container__form">
      <form className="form">
        <h2 className="form__title">¿A donde llevamos el pedido?</h2>
        <input
          type="text"
          className="form__input--long"
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
        <div className="container__texto">
          <h3 className="form__title2">¿Algo que debamos saber?</h3>
          <textarea className="form__texto"></textarea>
        </div>

      </form>
      <div className="container__orderComplete">
        <div className="container__pay">
          <div className="container__subTotal">
            <p className="text__order">Subtotal</p>
            <p className="text__price">$1630</p>
            <input type="text" placeholder="Código de descuento" />
          </div>
          <div className="container__total">
          <p className="text__modified">Total</p>
          <p className="text__price2">$1630</p>
          </div>
          
        </div>

        <div className="container__orderFinish">
          <button className="btn__order" onClick={handleState}>Concreta tu pedido</button>
          <p className="paragraph">El pago es unicamente en efectivo. <br/>
Al concretar el pedido te llegará el contacto al whatsapp. </p>
          <p className="text__modified2">¡Gracias!</p>
        </div>
      </div>
    </section>
  );
}

export default Form;
