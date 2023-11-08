import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        {/* <!-- About --> */}
        <About />
        <br />
        <br />
        <br />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
