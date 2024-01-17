import { useState, useEffect, useMemo } from "react";

function App() {
  const [num, setNum] = useState(1);

  const [counter, setCounter] = useState(0);

  let sum = useMemo(() => {
    let sum = 1;
    for(let i=2; i<=num; i++) {
      sum+=i;
    }
    return sum;
  }, [num]);

  

  return (
    <>
    <div>
      <input id="num" placeholder="Enter Number" onChange={function(x) {
        setNum(parseFloat(x.target.value))
      }}></input>
      <br />
      Sum from 1 to {num} is {sum}
      <br/>
      <button onClick={function() {
        setCounter(counter+1);
      }}>Counter {counter}</button>
    </div>

    </>
  )
}

export default App
