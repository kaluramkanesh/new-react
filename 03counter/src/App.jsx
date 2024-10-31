import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(0)
  // let counter = 5
  const addValue = () => {
    if (counter >= 20) {
      return;
    }
    setCounter(counter + 1)
  }
  function removeValue() {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Counter value : {counter}</h1>
      <button onClick={addValue}>add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
