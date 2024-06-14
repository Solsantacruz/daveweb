import { Routes, Route } from "react-router-dom";
import HomePage from "./view/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

function App() {
  
  return (
      <div >
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      
  )
}

export default App
