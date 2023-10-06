import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Login from "./components/Login"

function App() {

  return (
    <div>
        <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="/" element={<Home/>} />  
        </Routes>
    </div>
  )
}

export default App
