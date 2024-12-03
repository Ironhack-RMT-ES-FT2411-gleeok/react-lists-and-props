import FoodCard from "./FoodCard"

function FoodMenu() {

  let today = new Date()
  console.log(today)

  return (
    <div>
      
      <h3>Este es el menú de hoy: {today.toLocaleDateString()}</h3>

      <FoodCard tipoDePlato={"Entrada"} nombre={"Arepas con Queso"} emoji={"🫓"} bg={"orange"}/>
      <FoodCard tipoDePlato={"Plato Fuerte"} nombre={"Pabellon"} emoji={"🍽️"} bg={"darkblue"}/>
      <FoodCard tipoDePlato={"Postre"} nombre={"Pie de Calabaza"} emoji={"🥧"} bg={"darkred"}/>

      {/* <div className="card">
        <h2>Plato fuerte</h2>
        <p>Pabellon</p>
        <span className="emoji">🍽️</span>
      </div>

      <div className="card">
        <h2>Postre</h2>
        <p>pie de calabaza</p>
        <span className="emoji">🥧</span>
      </div> */}

    </div>
  )
}

export default FoodMenu