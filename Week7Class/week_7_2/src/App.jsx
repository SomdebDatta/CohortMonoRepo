import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState, selector } from "recoil";
import { countAtom } from "../store/atoms/count";
import { count_even } from "../store/atoms/count_selector";

function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
  
}

function Count() {
  console.log("count re-rendered");
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <CheckEven />
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      <div>Count is at {count}</div>  
    </div>
  )
}

function CheckEven() {
  const check_even_count = useRecoilValue(count_even);
  
  if (check_even_count) return <div>Count is even</div>
  else {
    return
  }
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return(<div>
    <button onClick={() => {
      setCount(c => c+1)
    }}>Increment</button>
    <button onClick={() => {
      setCount(c => c-1)
    }}>Decrement</button>
  </div>
  )
}

export default App
