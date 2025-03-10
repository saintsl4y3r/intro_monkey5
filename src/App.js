import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'src/react-refresh-runtime.js';
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Partners from "./components/Partners";
import Support from "./components/Support";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Partners />
              <Support />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
