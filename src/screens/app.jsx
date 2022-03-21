import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "../components/layout/content";
import Menu from "../components/layout/menu";
import "./app.css";

const App = (props) => {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
};

export default App;
