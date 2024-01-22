import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";

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
  const count = useRecoilValue(countAtom);

  if (count%2==0) {
    return <div>It is even</div>
  }
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
