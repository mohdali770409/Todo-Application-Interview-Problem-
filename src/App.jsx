import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddItem from "./pages/AddItem";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/addItem" element={<AddItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
