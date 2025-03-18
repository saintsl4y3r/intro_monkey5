import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import ChildCareServiceScreen from "./screens/ChildCareServiceScreen";

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
        {/* Add placeholder routes for the other services */}
        <Route
          path="/services/cooking"
          element={
            <>
              <Header />
              <div className="py-20 text-center">
                <h1 className="text-4xl font-bold text-orange-500 mb-4">
                  Cooking Service
                </h1>
                <p className="text-xl">
                  This page is under construction. Check back soon!
                </p>
              </div>
            </>
          }
        />
        <Route
          path="/services/housekeeping"
          element={
            <>
              <Header />
              <div className="py-20 text-center">
                <h1 className="text-4xl font-bold text-orange-500 mb-4">
                  Housekeeping Service
                </h1>
                <p className="text-xl">
                  This page is under construction. Check back soon!
                </p>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
