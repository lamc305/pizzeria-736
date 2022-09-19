import { useContext } from "react";
import { ModalContexto } from "../../../contexto/modalContext";
import "./form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormEnvio() {

  const data = useContext(ModalContexto)
  const { setIsOpen } = data

  const handleState = () => {
    setIsOpen('is_open')
  }

  return (
    <>
      <Formik
        initialValues={{
          calle: '',
          numero: '',
          piso: '',
          celular: '',
          codigoPostal: '',
          departamento: '',
          texto: '',
          descuento: ''
        }}
        validate={(valores) => {
          let errores = {}

          //validacion numero
          if (!valores.numero) {
            errores.numero = 'Por favor ingresa un numero'
            // eslint-disable-next-line no-useless-escape
          } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(valores.numero)) {
            errores.numero = 'Numero incorrecto'
          }

          //validacion celular
          if (!valores.celular) {
            errores.celular = 'Por favor ingresa un numero celular'
            // eslint-disable-next-line no-useless-escape
          } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(valores.celular)) {
            errores.celular = 'Numero de celular incorrecto'
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm()
        }}
      >
        {({ errors }) => (
          <Form className="container__form">
            <div className="form" >
              <label className="form__title">¿A donde llevamos el pedido?</label>
              <Field
                type="text"
                id="calle"
                name="calle"
                className="form__input--long"
                placeholder="Calle"
              />
              <Field
                type="text"
                id="numero"
                name="numero"
                className="form__input"
                placeholder="Numero"
              />
              <ErrorMessage name="numero" component={() => (
                <div className="error">{errors.numero}</div>
              )} />
              <Field
                type="text"
                id="piso"
                name="piso"
                className="form__input"
                placeholder="Piso"
              />
              <Field
                type="text"
                id="celular"
                name="celular"
                className="form__input"
                placeholder="Celular"
              />
              <ErrorMessage name="celular" component={() => (
                <div className="error">{errors.celular}</div>
              )} />

              <Field
                type="text"
                id="codigoPostal"
                name="codigoPostal"
                className="form__input form__input--separate"
                placeholder="Código postal"
              />
              <Field
                type="text"
                id="departamento"
                name="departamento"
                className="form__input form__input--separate"
                placeholder="Departamento"
              />
              <div className="container__texto">
                <label className="form__title2">¿Algo que debamos saber?</label>
                <Field
                  type="text"
                  id="texto"
                  name="texto"
                  className="form__texto"
                />
              </div>

            </div>
            <div className="container__orderComplete">
              <div className="container__pay">
                <div className="container__subTotal">
                  <p className="text__order">Subtotal</p>
                  <p className="text__price">$1630</p>
                  <Field
                    type="text"
                    id="descuento"
                    name="descuento"
                    placeholder="Código de descuento"
                  />
                </div>
                <div className="container__total">
                  <p className="text__modified">Total</p>
                  <p className="text__price2">$1630</p>
                </div>

              </div>

              <div className="container__orderFinish">
                <button type="submit" className="btn__order" onClick={handleState}>Concreta tu pedido</button>
                <p className="paragraph">El pago es unicamente en efectivo. <br />
                  Al concretar el pedido te llegará el contacto al whatsapp. </p>
                <p className="text__modified2">¡Gracias!</p>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormEnvio;
