import React from "react";
import { Route, BrowserRouter, Link } from "react-router-dom";
import About from "./routes/about";
import Home from "./routes/home";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </BrowserRouter>
  );
}

export default App;
