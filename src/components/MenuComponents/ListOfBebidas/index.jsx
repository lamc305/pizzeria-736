import CardBebida from "../../MenuComponents/CardBebida"
import './listOfItems.css'

function ListOfBebidas({ state, name }) {

  return (
    <>
      {state && state.length !== 0 && <>
        {name &&
          <div className="ListOfItems__header">
            <h2 id={name}>{name}</h2>
            <div></div>
          </div>
        }
        <section className='producto'>
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
        </section>
      </>}
    </>
  )
}

export default ListOfBebidas