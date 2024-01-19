import './App.css'
// import { Assignment1 } from './components/Assignment1'
import { useState } from 'react'
// import { Assignment2 } from './components/Assignment2'
import Assignment3 from './components/Assignment3'

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      {/* <Assignment1 /> */}
      {/* <button onClick={() => {
        setCounter(counter+1);
      }}>dummy button counter at {counter}</button>
      <div>hi there</div> */}
      {/* <Assignment2 /> */}
      <Assignment3 />
    </>
  )
}

export default App
