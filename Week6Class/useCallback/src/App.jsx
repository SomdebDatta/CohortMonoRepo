import { useEffect, useState, useCallback, memo } from "react"

function App() {
  const [count, setCount] = useState(0);

  const logSomething = useCallback(() => {
    console.log("Child clicked");
  }, [])

  return (
    <>
      <ButtonComponent inputFunction={logSomething}/>
      <button onClick={() => {
        setCount(count+1);
      }}>Click me {count}</button>
    </>
  )
}

const ButtonComponent = memo(({inputFunction}) => {
  console.log("Child render");

  return <div>
    <button>Button clicked</button>
  </div>
})

export default App
