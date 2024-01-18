import { useEffect } from "react";
import { useState } from "react"

function App() {
  // const [count, setCount] = useState(0);
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("Hi there from app");

  useEffect(() => {
    setTimeout(() => {
      setExchangeData({returns: 100});
    }, 3000);

    setTimeout(() => {
      setBankData({income: 100});
    }, 1000);
  }, []);

  const incomeTax = (exchangeData.returns + bankData.income) * 0.3;

  return (
    <div>
      Your income tax is {incomeTax}
    </div>
  )
}

export default App
