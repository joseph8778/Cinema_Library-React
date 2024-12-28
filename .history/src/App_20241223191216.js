import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Directory from "./pages/Directory";
import Selected from "./pages/Selected";
import CartCheckout from "./pages/CartCheckout";
import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';
import Signin from "./pages/Signin";


function App() {

  return (
  <Provider
    <Router>
      <Nav/>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/search' element={<Directory/>} />
        <Route path='/movie/:id' element={<Selected/>} />
        <Route path='/cart' element={<CartCheckout/>} />
      </Routes>
    </div>
    <Footer/>
    </Router>
  );
}

export default App;
