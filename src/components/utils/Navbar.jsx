import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logo.svg";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <ul className="nav-ul-container">
        <li className="logo-container">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
            to="/"
          >
            <img className="logo" src={Logo} />
          </Link>
        </li>

        <div className="li-container">
          <li className="calendar">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              className="link"
              to="/calendar"
            >
              Calendário
            </Link>
          </li>
        </div>

        <div className="li-container">
          <li className="client">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              className="link"
              to="/client"
            >
              Clientes
            </Link>
          </li>
        </div>

        <div className="li-container">
          <li className="budgets">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              className="link"
              to="/budgets"
            >
              Orçamentos
            </Link>
          </li>
        </div>

        <div className="li-container">
          <li className="properties">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              className="link"
              to="/properties"
            >
              Propeiedades
            </Link>
          </li>
        </div>

        <div className="li-container">
          <li className="control">
            <Link
              style={{ color: "inherit", textDecoration: "inherit" }}
              className="link"
              to="/control"
            >
              Controle
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
