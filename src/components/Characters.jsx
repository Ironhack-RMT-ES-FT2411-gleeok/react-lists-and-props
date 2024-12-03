import React from 'react'

import characters from '../data/characters';

function Characters() {

  const titles = ['TEENAGE', 'MUTANT', 'NINJA', 'TURTLES'];

  return (
    <>
    <div className="container">
      {titles.map((eachTitle, index) => {
        return ( <h1 key={index}>{eachTitle}</h1> )
      })}
    </div>

    <h2>List of Characters</h2>

    {characters.map((eachCharObj, index) => {

      // let correctEmoji;
      // if (eachCharObj.name === "splinter") {
      //   correctEmoji = "🐀"
      // } else {
      //   correctEmoji = "🐢"
      // }

      return (
        <div key={index} className="container" style={{backgroundColor: eachCharObj.color}}>
          <h3>Name: {eachCharObj.name}</h3>
          <p>Weapon: {eachCharObj.weapon}</p>
          {/* { eachCharObj.name === "splinter" ? <p className="emoji">🐀</p> : <p className="emoji">🐢</p> } */}
          <p className='emoji'> {eachCharObj.name === "splinter" ? "🐀" : "🐢"} </p>

          {eachCharObj.name === "donatello" ? <p className='emoji'>🌟</p> : null}

          {/* //* como hacer renderizacion condicionada con operador de corto circuito */}
          {/* {eachCharObj.name === "michelangelo" && <p className='emoji'>🌟</p>} */}
          

        </div>
      )
    })}
  </>
  )
}

export default Characters