
import './App.css'
import Card from './Card'
function App() {
  let myObj = {
    username: "kaluram",
    age: 24
  }
  let newArr = [1, 2, 3, 4]
  return (
    <>
      <h1>componet</h1>
      <Card name="Kaluram" place="India" position="Software Engineer" />
      <Card name="CK" place="India" position="MBA" />
    </>
  )
}

export default App
