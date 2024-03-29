import { useState } from "react"
import { CountContext } from "./context";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count />
      </CountContext.Provider>
    </div>
  )
  
}

function Count() {
  console.log("count re-rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer() {
  const {count} = useContext(CountContext);

  return (
    <div>
      Count is at {count}
    </div>
  )
}

function Buttons() {
  const {count, setCount} = useContext(CountContext);

  return(<div>
    <button onClick={() => {
      setCount(count+1);
    }}>Increment</button>
    <button onClick={() => {
      setCount(count-1);
    }}>Decrement</button>
  </div>
    
  )
}

export default App
