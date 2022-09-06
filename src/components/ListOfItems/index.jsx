import Items from "../Item"

function ListOfItems({ state, name }) {
  return (
    <>
      {name &&
        <>
          <h2>{name}</h2>
          <hr />
        </>
      }
      <section className='producto'>
        {state && state.map(({ description, name, id, price }) => (
          <Items
            description={description}
            id={id}
            key={id}
            name={name}
            price={price}
          />
        ))}
      </section>
    </>
  )
}

export default ListOfItems