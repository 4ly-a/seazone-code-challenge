import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Seazone</Link>
        </li>
        <li>
          <Link to="/calendar">Calendário</Link>
        </li>
        <li>
          <Link to="/client">Clientes</Link>
        </li>{" "}
        <li>
          <Link to="/budgets">Orçamentos</Link>
        </li>
        <li>
          <Link to="/properties">Propeiedades</Link>
        </li>
        <li>
          <Link to="/control">Controle</Link>
        </li>
      </ul>
    </div>
  );
}
