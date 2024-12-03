
function List() {

  let arrayOfveggies = ["tomates", "patatas", "aguacates", "lechuga", "tomates"]

  // [<li>tomates</li>, <li>patatas</li>, <li>aguacates</li>, <li>aguacates</li>]
  // let arrayofJSX = arrayOfveggies.map((cadaVeggie) => {
  //   return (
  //     <li>{cadaVeggie}</li>
  //   )
  // })

  return (
    <div>

      <h3>Listas</h3>

      {/* <p>{arrayOfveggies}</p> */}
      
      {/* <li>{arrayOfveggies[0]}</li>
      <li>patatas</li> */}

      {/* cada vez que hacemos un map en react (cada vez que pintamos una lista) cada elemento de la lista debe tener un identificativo unico. */}

      {arrayOfveggies.map((cadaVeggie, index) => {
        return (
          <li key={index}>{cadaVeggie}</li>
        )
      })}

      {/* forma de escribir lo de arriba de forma minimizada */}
      {/* {arrayOfveggies.map((cadaVeggie) => <li>{cadaVeggie}</li>)} */}

    </div>
  )
}

export default List