import {Navbar, Home, Welcome} from "./Container/Exports"
import "./index.css"
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <>
    <Navbar /> 
    <Routes>
      <Route>
      <Route exact path="/" element={<Welcome />} />
      <Route exact path="/Home" element ={<Home />} /> 
      </Route>
    </Routes>
    </>
  );
}

export default App;
