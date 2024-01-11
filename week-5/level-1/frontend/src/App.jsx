import Login from "./pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Signup from "./pages/Signup";
import Cards from "./pages/Cards";

/*
--OPTIMIZATION--
- A generic form component can be built
- Via useState, the text layout and submit functionality changes
- The text and functions could be the props of the component
- useEffect can be used to track the changes in the state
*/

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/get-all-cards" element={<Cards />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
