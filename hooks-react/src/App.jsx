import { useState } from 'react'
import './App.css'
// import { set } from 'react-hook-form';

function App() {
// let count = 15;
  // count is a variavle and set count is a function.
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1); // now it will take the callback value and 4 times the increment will be done
  }
  const removeValue = () => {
    setCount(count - 1);
    
  }
  return (
    <>
    <h1>React Course with Hitesh {count}</h1>
    <h2>Counter value : {count}</h2>
    <button
    onClick= {addValue}>Add Value</button> {" "}
    <button 
    onClick = {removeValue}>Remove Value</button>
    <p>footer: {count} </p>
    </>
  )
}

export default App
