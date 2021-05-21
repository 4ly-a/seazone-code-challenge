import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Calendar from "./components/calendar/Calendar";
import Budgets from "./components/budgets/Budgets";
import Client from "./components/client/Client";
import Control from "./components/control/Control";
import Properties from "./components/proprieties/Properties";
import Navbar from "./components/navbar/Navbar";
import InfoBar from "./components/navbar/infobar/Infobar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

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

          <Route path="/control">
            <InfoBar />
            <Control />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
