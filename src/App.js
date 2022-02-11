import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Contact from './component/contact';
import About from './component/about';




import { BrowserRouter, Route, Routes } from "react-router-dom";
import Placeprops from './component/place_props';
import Signup from './component/signup';
import Login from './component/login';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/place_props" element={<Placeprops />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />


          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

