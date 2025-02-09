
import { Routes, Route } from "react-router"

import Browse from "./components/Browse"
import Login from "./components/Login"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={< Browse />} />
      </Routes>
    </>
  )
}

export default App;