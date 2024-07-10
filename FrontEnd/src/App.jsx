import './index.css';
import { Helmet } from "react-helmet-async";
import {Notes, Navbar, Footer} from "./container/Exports"

function App() {

  return (
    <>
    <Helmet>
        <title>Home - Notes App</title>
      </Helmet>
      <div>
        <Navbar />
        <Notes />
        <Footer />
      </div>
    </>
  )
}

export default App
