import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Plant from "./pages/Plant"
import Cart from "./pages/Cart"
import About from "./pages/About";
import Contact from "./pages/Contact"

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/plant" element={<Plant/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
  </div>)
};

export default App;
