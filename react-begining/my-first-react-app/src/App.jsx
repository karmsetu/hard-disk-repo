// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Greeting from './greetings'
import Animal from './animalList'
import MyFruitList from './fruitList'
// import ListReturner from './assets/listReturner'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      < Greeting/>
      < Animal/>
      <MyFruitList/>
      {/* < ListReturner/> */}
    </>
  )
}

export default App
