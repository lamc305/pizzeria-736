import CardBebida from "../../MenuComponents/CardBebida"
import './listOfItems.css'

function ListOfBebidas({ state, name, referencia, scroll }) {

  return (
    <>
      {state.length !== 0 && <div className="ListOfItems__container"  >
        {state && state.length !== 0 && <>

          <div ref={scroll} className="ListOfItems__header">
            <h2 ref={referencia} id={name}>{name}  ({state.length})</h2>
            <div></div>
          </div>

          {state && <section className='producto'>
            {state.map(({ description, name, id, price, img, quantity = 0, inCart = false }) => (
              <CardBebida
                description={description}
                id={id}
                key={id}
                name={name}
                price={price}
                img={img}
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

export default ListOfBebidas