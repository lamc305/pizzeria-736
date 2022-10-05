import CardEmpanada from "../../MenuComponents/CardBebida"
import '../ListOfBebidas/listOfItems.css'

function ListOfEmpanadas({ state, name, referencia, scroll }) {

  return (
    <>
      {state && <div className="ListOfItems__container">
        {state && <>
          {name &&
            <div ref={scroll} className="ListOfItems__header">
              <h2 ref={referencia} id={name}>{name}  ({state.length})</h2>
              <div></div>
            </div>
          }
          {state && <section className='producto'>
            {state.map(({ description, name, id, price, img, quantity = 0, inCart = false }) => (
              <CardEmpanada
                description={description}
                id={id}
                img={img}
                key={id}
                name={name}
                price={price}
                quantity={quantity}
                inCart={inCart}
              />
            ))}
          </section>}
        </>}
      </div>}
    </>
  )
}

export default ListOfEmpanadas