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
    </div>
  )
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);

  return (
    <div>
      Count is at {count}
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);

  return(<div>
    <button onClick={() => {
      setCount(function(c) {
        return c+1;
      })
    }}>Increment</button>
    <button onClick={() => {
      setCount(function(c) {
        return c-1;
      })
    }}>Decrement</button>
  </div>
    
  )
}

export default App
