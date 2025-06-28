import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setCounter] = useState(0);

  const valuePlus = () => {
    setCounter(counter + 1);
    console.log(counter);
  }

  const valueMinus = () => {
    setCounter(counter - 1);
    console.log(counter);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter is : {counter}</h2>

      <button id="plus" onClick={valuePlus}>Plus</button>
      <button id="minus" onClick={valueMinus}>Minus</button>
    </>
  )
}

export default App
