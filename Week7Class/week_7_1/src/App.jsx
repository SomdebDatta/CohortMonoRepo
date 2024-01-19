// import { Dashboard } from "./components/Dashboard"
// import { Landing } from "./components/Landing"
import React from "react"
import { Suspense, lazy } from "react"

const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"))

import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom"


function App() {

  return (
    <BrowserRouter>
    <Appbar />
      <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense> }/>
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
