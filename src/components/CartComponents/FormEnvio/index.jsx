import { useContext } from "react";
import { ModalContexto } from "../../../contexto/modalContext";
import { ReducerContext } from "../../../contexto/reducerContext";

import "./form.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import UseWhatsapp from "../../../hooks/useWhatsapp";

function FormEnvio() {

  const data = useContext(ModalContexto)
  const { state } = useContext(ReducerContext)
  const { setIsOpen } = data
  const { cart } = state
  const totalCount = cart.map(res => res.quantity * res.price).reduce((acc, sum) => acc + sum, 0)

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
        validate={(values) => {
          let errores = {}

          //validacion calle
          if (!values.calle) {
            errores.calle = 'Por favor ingresa una calle'
          }

          //validacion codigo postal
          if (!values.codigoPostal) {
            errores.codigoPostal = 'Por favor ingresa el codigo postal'
          } else if (!/[0-9]$/.test(values.codigoPostal)) {
            errores.codigoPostal = 'Codigo postal incorrecto'
          }

          //validacion departamento
          if (!values.departamento) {
            errores.departamento = 'Por favor ingresa el departamento'
          }
          return errores;
        }}
        onSubmit={(valores) => {
          setIsOpen('is_open')
          const cartProducts = cart.map(({ name, price, quantity }) => {
            const text = ` ${name} x ${quantity} = $${price * quantity}`
            return text
          })
          const message = `Hola, estoy interesado en los siguientes productos:
          ${cartProducts}
          Esta es mi dirección: calle: ${valores.calle}, departamento: ${valores.departamento}, codigo postal: ${valores.codigoPostal} ${valores.numero && `, numero: ${valores.numero}`} ${valores.piso && `, piso: ${valores.piso}`} ${valores.texto && `, tambien quiero que sepan que ${valores.texto}`}
          `
          setTimeout(() => UseWhatsapp('+5491132323293', message), 1500
          )
        }}

      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          handleBlur
        }) => (
          <Form className="container__form" onSubmit={handleSubmit}>

            <div className="form" >
              <label className="form__title">¿A donde llevamos el pedido?</label>
              <div className="input calle">
                <Field
                  type="text"
                  id="calle"
                  name="calle"
                  value={values.calle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="form__input--long"
                  placeholder=" "
                />
                <label className="form__label">Calle</label>
                <ErrorMessage name="calle" component={() => (
                  <div className="error">{errors.calle}</div>
                )} />
              </div>
              <div className="input numero">

                <Field
                  type="text"
                  id="numero"
                  name="numero"
                  value={values.numero}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="form__input"
                  placeholder=" "
                />
                <label className="form__label">Numero</label>
                <ErrorMessage name="numero" component={() => (
                  <div className="error">{errors.numero}</div>
                )} />
              </div>
              <div className="input piso">

                <Field
                  type="text"
                  id="piso"
                  name="piso"
                  value={values.piso}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="form__input"
                  placeholder=" "
                />
                <label className="form__label">Piso</label>
                <ErrorMessage name="piso" component={() => (
                  <div className="error">{errors.piso}</div>
                )} />
              </div>
              <div className="input celular">

                <Field
                  type="text"
                  id="celular"
                  name="celular"
                  value={values.celular}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="form__input"
                  placeholder=" "
                />
                <label className="form__label">Celular</label>
                <ErrorMessage name="celular" component={() => (
                  <div className="error">{errors.celular}</div>
                )} />
              </div>

              <div className="input postal">
                <Field
                  type="text"
                  id="codigoPostal"
                  name="codigoPostal"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.codigoPostal}
                  className=" form__input--separate"
                  placeholder=" "
                />
                <label className="form__label">Código postal</label>
                <ErrorMessage name="codigoPostal" component={() => (
                  <div className="error">{errors.codigoPostal}</div>
                )} />

              </div>
              <div className="input departamento">
                <Field
                  type="text"
                  id="departamento"
                  name="departamento"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.departamento}
                  className=" form__input--separate"
                  placeholder=" "
                />
                <label className="form__label">Departamento</label>
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.texto}
                  className="form__texto"
                />
              </div>

            </div>
            <div className="container__orderComplete">
              <div className="container__pay">
                <div className="container__subTotal">
                  <p className="text__order">Subtotal</p>
                  <p className="text__price">${totalCount}</p>

                </div>
                <div className="container__total">
                  <p className="text__modified">Total</p>
                  <p className="text__price2">${totalCount}</p>
                </div>

              </div>

              <div className="container__orderFinish">
                <button type="submit" className="btn__order">Concreta tu pedido</button>
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
