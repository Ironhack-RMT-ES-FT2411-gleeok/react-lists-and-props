import './App.css'
import Characters from './components/Characters'
import Contenedor from './components/Contenedor'
import FoodMenu from './components/FoodMenu'
import List from './components/List'

import ReactPlayer from 'react-player'

function App() {

  return (
    <div>
      {/* <h1>Aprendiendo React</h1> */}

      {/* <List /> */}

      {/* <Characters /> */}

      {/* <FoodMenu /> */}

      <Contenedor bgColor="red">
        <h2>direccion de bob</h2>
      </Contenedor>

      <Contenedor bgColor="blue">
        <h5>cualquier titulo</h5>
      </Contenedor>

      <Contenedor bgColor="purple">
        <li>patata</li>
      </Contenedor>

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' controls={true}/>

    </div>
  )
}

export default App
