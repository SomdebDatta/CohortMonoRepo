import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [render, setRender] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setRender(r => !r);
    }, 5000);
  }, []);

  return (
    <div>
      {render ? <MyComponent /> : <div></div>}
      {/* <MyComponent /> */}
    </div>
  )
}

class MyComponent extends React.Component {
  componentDidMount() {
    // Perform setup or data fetching here
    console.log('component mounted');
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log('component unmounted')
  }

  render() {
    // Render UI
    <div>
      hi there
    </div>
  }
}

export default App
