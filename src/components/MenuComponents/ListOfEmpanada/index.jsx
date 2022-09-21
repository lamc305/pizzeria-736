import CardEmpanada from "../../MenuComponents/CardBebida"
import '../ListOfBebidas/listOfItems.css'

function ListOfEmpanadas({ state, name }) {

  return (
    <>

      {state && <>
        {name &&
          <div className="ListOfItems__header">
            <h2 id={name}>{name}</h2>
            <div></div>
          </div>
        }
        <section className='producto'>
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
        </section>
      </>}
    </>
  )
}

export default ListOfEmpanadas