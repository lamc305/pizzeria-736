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
          {state.map(res => (
            <CardPizza key={res.id} {...res} />
          ))}
        </section>
      </>}
    </>
  )
}

export default ListOfPizza