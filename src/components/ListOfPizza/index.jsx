import CardPizza from "../CardPizza"
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
          {state.map(({ description, name, id, price, img }) => (
            <CardPizza
              description={description}
              id={id}
              key={id}
              name={name}
              price={price}
              img={img}
            />
          ))}
        </section>
      </>}
    </>
  )
}

export default ListOfPizza