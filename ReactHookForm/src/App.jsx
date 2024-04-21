import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import DisplayUserData from "./DisplayUserData";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/DisplayUserData" element={<DisplayUserData />} />
      </Routes>
    </Router>
  );
}
export default App;
