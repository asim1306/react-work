import "./App.css";
import React from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

 import { BrowserRouter, Routes, Route} from "react-router-dom";
 import Home from './components/Home';
import About from "./components/About";

function App() {
  return (
    <>
    
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
