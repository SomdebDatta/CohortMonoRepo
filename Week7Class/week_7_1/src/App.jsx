import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count} setCount={setCount}/>
      
    </div>
  )
  
}

function Count({count, setCount}) {
  return (
    <div>
      Count is {count}
      <Buttons count={count} setCount={setCount}/>
    </div>
  )
}

function Buttons({count, setCount}) {
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
