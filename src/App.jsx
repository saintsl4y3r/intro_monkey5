import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutUsScreen from "./screens/AboutUsScreen";
import Login from "./components/Login";
import ChildCareServiceScreen from "./screens/ChildCareServiceScreen";
import CookingServiceScreen from "./screens/CookingServiceScreen";
import HousekeepingServiceScreen from "./screens/HousekeepingServiceScreen";

// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // When the route changes, scroll to the top
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router basename="/intro_monkey5">
      <ScrollToTop />
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
        <Route path="/about" element={<AboutUsScreen />} />
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
