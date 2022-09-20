import CardPizza from "../../MenuComponents/CardPizza"
import '../ListOfBebidas/listOfItems.css'

function ListOfPizza({ state, name }) {

  return (
    <>
      {state && <>
        {name &&
          <div className="ListOfItems__pizza">
            <div id={name}></div>
          </div>
        }
        <section className='producto'>
          {state.map(({ price, name, description, image, quantity = 0, id, inCart = false }) => (
            <CardPizza
              key={id}
              price={price}
              name={name}
              description={description}
              image={image}
              id={id}
              quantity={quantity}
              inCart={inCart}
            />
          ))}
        </section>
      </>}
    </>
  )
}

export default ListOfPizza