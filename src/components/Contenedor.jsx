import React from 'react'

function Contenedor(props) {
  console.log(props)
  return (
    <div style={{backgroundColor: props.bgColor}}>
      
      {props.children}

    </div>
  )
}

export default Contenedor