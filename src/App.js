import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login.js";
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";


function App() {

  const [dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
return (
  <div className="app">
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}>
      </Route>
        <Route path="/" element={<><Header/><Home/></>}>
        </Route>
      </Routes>
    </Router>
  </div>
);
}
export default App;