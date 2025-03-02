import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Support from "./components/Support";
import Footer from "./components/Footer";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Support />
      <Footer />
    </div>
  );
};

export default App;