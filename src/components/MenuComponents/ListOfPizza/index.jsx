import CardPizza from "../../MenuComponents/CardPizza"
import '../ListOfBebidas/listOfItems.css'

function ListOfPizza({ state, name, scroll, referencia }) {

  return (
    <>

      {state && <div className="ListOfItems__container" >
        {state && <>

          <div ref={scroll} className="ListOfItems__header">
            <h2 ref={referencia} id={name}>{name}  ({state.length})</h2>
            <div></div>
          </div>

          {state && <section className='producto'>
            {state.map(({ price, name, description, img, quantity = 0, id, inCart = false }) => (
              <CardPizza
                key={id}
                price={price}
                name={name}
                description={description}
                img={img}
                id={id}
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

export default ListOfPizza