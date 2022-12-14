import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "./App.css";

import Contact from "./components/Contact";
import ContactList from "./components/ContactList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/contacts" className="navbar-brand">
          Contacts
        </a>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/contacts"]} component={ContactList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
