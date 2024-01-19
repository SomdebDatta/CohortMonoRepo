import { Dashboard } from "./components/Dashboard"
import { Landing } from "./components/Landing"

import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Appbar />
      <Routes>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/" element={<Landing />}/>
      </Routes>
    </BrowserRouter>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return (
  <div style={{background: "blue"}}>
    <button onClick={() => {
      navigate("/");
      }}>Landing button</button>
    <button onClick={() => {
      navigate("/dashboard");
      }}>Dashboard button</button>
  </div>)
}

export default App
