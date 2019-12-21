import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login  from "./login/login";
import Home from "./content/home/home"
import Footer from "./footer/footer";

function App() {
  return (
    <Router className="App">
    <div className="App">
      <div className="body">
      <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </div>
      <Footer/>
    </div>
  </Router>
  );
}

export default App;
