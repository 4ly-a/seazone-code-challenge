import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo/logo.svg";

export default function Items(id) {
  const styles = ["li-container", "active"];

  const [active, setActive] = useState(0);
  const handleclick = (number) => {
    setActive(active === number ? null : number);
  };

  return (
    <nav className="nav-container">
      <ul className="nav-ul-container">
        <li onClick={() => handleclick(0)} className="logo-container">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            className="link"
            to="/"
          >
            <img className="logo" src={Logo} alt="logo-seazone" />
          </Link>
        </li>

        <div
          className={active === 1 ? styles.join(" ") : styles[0]}
          onClick={() => handleclick(1)}
        >
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
        <div
          className={active === 2 ? styles.join(" ") : styles[0]}
          onClick={() => handleclick(2)}
        >
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
        <div
          className={active === 3 ? styles.join(" ") : styles[0]}
          onClick={() => handleclick(3)}
        >
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
        <div
          className={active === 4 ? styles.join(" ") : styles[0]}
          onClick={() => handleclick(4)}
        >
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
        <div
          className={active === 5 ? styles.join(" ") : styles[0]}
          onClick={() => handleclick(5)}
        >
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
