// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Greeting from './greetings'
import Animal from './animalList'
import MyFruitList from './fruitList'
import NewList from './newList'
import TodoList from './toDo'
import Button from './buttonProp'
import ColorButton from './colorButton'
import Person from './person'
import Clock from './useStateHook'
import FunctionalInput from './classComponent'
import RenderName from './typeChecker'
// import ListReturner from './assets/listReturner'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      < Greeting/>
      < Animal/>
      <MyFruitList/>
      < NewList/>
      < TodoList/>
      <div>
        <Button text="Click Me!" color="blue" fontSize={12} />
        <Button text="Don't Click Me!" color="red" fontSize={12} />
        <Button  />
      </div>
      < ColorButton/>
      < Person/>
      < Clock/>
      < FunctionalInput/>
      < RenderName name='boi'/>
      {/* < ListReturner/> */}
    </>
  )
}

export default App
