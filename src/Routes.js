import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Home from "./components/home/Home";
import Calendar from "./components/calendar/Calendar";
import Budgets from "./components/budgets/Budgets";
import Client from "./components/client/Client";
import Control from "./components/control/Control";
import Navbar from "./components/navbar/Navbar";
import InfoBar from "./components/navbar/infobar/Infobar";
import Properties from "./components/proprieties/Properties";
import Details from "./components/proprieties/details/Details";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Route path="/" exact>
        <Home />
      </Route>

      <Switch>
        <Route path="/calendar">
          <Calendar />
        </Route>

        <Route path="/client">
          <Client />
        </Route>

        <Route path="/budgets">
          <Budgets />
        </Route>

        <Route path="/properties">
          <InfoBar />
          <Properties />
        </Route>

        <Route path="/details">
          <InfoBar />
          <Details />
        </Route>

        <Route exact path="/control">
          <Control />
        </Route>

        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
