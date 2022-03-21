import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = (props) => {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/params/123">Params #01</Link>
          </li>
          <li>
            <Link to="/params/Léo">Params #02</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/lorem">Não existe</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Menu;
