import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "./app.scss";

import NavPart from "./parts/nav";
import Alerts from "./alerts";
import Accordians from "./acordians";
import Badges from "./badges";
import Breadcrumbs from "./breadcrumbs";
import ButtonGroups from "./buttongroups";

const App = () => (
  <Container fluid>
        <NavPart />
    <div>Name: main</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <h1>Accordians</h1>
    <Accordians />
    <h2>Alerts</h2>
    <Alerts />
    <h2>Badges</h2>
    <Badges />
    <h2>Breadcrumbs</h2>
    <Breadcrumbs />
    <h2>Button group</h2>
    <ButtonGroups />
  </Container>
);
ReactDOM.render(<App />, document.getElementById("app"));
