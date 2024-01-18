import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react"
import { useCallback } from "react";
import { memo } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const [exchangeData, setExchangeData] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("Hi there from app");

  useEffect(() => {
    setExchangeData({returns: 100});
  }, []);

  useEffect(() => {
    setExchange2Data({returns: 100});
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setBankData({income: 100});
    }, 5000);
  });

  const calculateCryptoReturns = useCallback(() => {
    return exchange2Data.returns + exchangeData.returns;
  }, [exchange2Data, exchangeData]);

  // const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
      <CryptoGainsCalculator funcToCall={calculateCryptoReturns} />
    </div>
  )

  
}
const CryptoGainsCalculator = memo(function({funcToCall}) {
  console.log("crypto child rerendered")
  return <div>
    Your crypto returns are {funcToCall()}
  </div>
})

export default App
