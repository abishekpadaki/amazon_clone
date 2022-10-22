import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
function App() {
return (
  <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<><Header/><Home/></>}>
        </Route>
      </Routes>
    </Router>
  </div>
);
}
export default App;