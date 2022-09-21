import { useContext } from "react";
import { ModalContexto } from "../../../contexto/modalContext";
import { ReducerContext } from "../../../contexto/reducerContext";

import "./form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormEnvio({ name, description, quantity }) {

  const data = useContext(ModalContexto)
  const { state } = useContext(ReducerContext)
  const { setIsOpen } = data
  const { cart } = state
  const totalCount = cart.map(res => res.quantity * res.price).reduce((acc, sum) => acc + sum, 0)


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

          //validacion calle
          if (!valores.calle) {
            errores.calle = 'Por favor ingresa una calle'
          }

          //validacion numero
          if (!valores.numero) {
            errores.numero = 'Por favor ingresa un numero'
            // eslint-disable-next-line no-useless-escape
          } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(valores.numero)) {
            errores.numero = 'Numero incorrecto'
          }

          //validacion piso
          if (!valores.piso) {
            errores.piso = 'Por favor ingresa un piso'
          }

          //validacion celular
          if (!valores.celular) {
            errores.celular = 'Por favor ingresa un numero celular'
            // eslint-disable-next-line no-useless-escape
          } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(valores.celular)) {
            errores.celular = 'Numero de celular incorrecto'
          }
          //validacion codigo postal
          if (!valores.codigoPostal) {
            errores.codigoPostal = 'Por favor ingresa una calle'
          } else if (!/[0-9]$/.test(valores.codigoPostal)) {
            errores.codigoPostal = 'Codigo postal incorrecto'
          }

          //validacion departamento
          if (!valores.departamento) {
            errores.departamento = 'Por favor ingresa el departamento'
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm()
        }}
      >
        {({ errors }) => (
          < Form className="container__form">

            <div className="form" >
              <label className="form__title">¿A donde llevamos el pedido?</label>
              <div className="calle">
                <Field
                  type="text"
                  id="calle"
                  name="calle"
                  className="form__input--long"
                  placeholder="Calle"
                />
                <ErrorMessage name="calle" component={() => (
                  <div className="error">{errors.calle}</div>
                )} />
              </div>
              <div className="numero">

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
              </div>
              <div className="piso">

                <Field
                  type="text"
                  id="piso"
                  name="piso"
                  className="form__input"
                  placeholder="Piso"
                />
                <ErrorMessage name="piso" component={() => (
                  <div className="error">{errors.piso}</div>
                )} />
              </div>
              <div className="celular">

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
              </div>

              <div className="postal">
                <Field
                  type="text"
                  id="codigoPostal"
                  name="codigoPostal"
                  className=" form__input--separate"
                  placeholder="Código postal"
                />
                <ErrorMessage name="codigoPostal" component={() => (
                  <div className="error">{errors.codigoPostal}</div>
                )} />

              </div>
              <div className="departamento">
                <Field
                  type="text"
                  id="departamento"
                  name="departamento"
                  className=" form__input--separate"
                  placeholder="Departamento"
                />
                <ErrorMessage name="departamento" component={() => (
                  <div className="error">{errors.departamento}</div>
                )} />
              </div>

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
                  <p className="text__price">${totalCount}</p>
                  <Field
                    type="text"
                    id="descuento"
                    name="descuento"
                    placeholder="Código de descuento"
                  />
                </div>
                <div className="container__total">
                  <p className="text__modified">Total</p>
                  <p className="text__price2">${totalCount}</p>
                </div>

              </div>

              <div className="container__orderFinish">
                <a href={`https://wa.me/5124234234234234?text=Hola,%20me%20interesa%20${quantity}%20${name}% 20de%20${description}.`}><button type="submit" className="btn__order" onClick={handleState}>Concreta tu pedido</button></a>

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
