
function FoodCard(props) {
  console.log(props) // SIEMPRE HACER CONSOLE.LOG DE PROPS

  return (
    <div className="card" style={{backgroundColor: props.bg}}>
      <h2>{props.tipoDePlato}</h2>
      <p>{props.nombre}</p>
      <span className="emoji">{props.emoji}</span>
    </div>
  )
}

export default FoodCard