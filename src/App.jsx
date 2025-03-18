import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import ChildCareServiceScreen from "./screens/ChildCareServiceScreen";
import CookingServiceScreen from "./screens/CookingServiceScreen";
import HousekeepingServiceScreen from "./screens/HousekeepingServiceScreen";

function App() {
  return (
    <Router basename="/intro_monkey5">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/services/childcare"
          element={<ChildCareServiceScreen />}
        />
        <Route path="/services/cooking" element={<CookingServiceScreen />} />
        <Route
          path="/services/housekeeping"
          element={<HousekeepingServiceScreen />}
        />
      </Routes>
    </Router>
  );
}

export default App;
