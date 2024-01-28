import { useEffect, useState } from 'react';

function useInterval (fn, timeout) {
    useEffect(() => {
        const clockValue = setInterval(() => {
            fn();
        }, timeout);

        return () => {
            clearInterval(clockValue);
        }
    }, [fn, timeout])
}

function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}

export default App