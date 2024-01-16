import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const [counter, setCounter] = useState(0);

  function CalculateFactorial({num}) {
    let sum = 0;
    for (let i=1; i<=num; i++) {
      sum+=i;
    }
    return <div>
      Sum is {sum}
    </div>
  }

  return (
    <>
    <div>
      <input id="num" placeholder="Enter Number" onInput={function() {
        setNum(parseFloat(document.getElementById("num").value))
      }}></input>
      <CalculateFactorial num={num} />
      <button onClick={function() {
        setCounter(counter+1);
      }}>Counter {counter}</button>
    </div>

    </>
  )
}

export default App
