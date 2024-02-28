import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import "./app.scss";

import NavPart from "./parts/nav";

const App = () => (
  <Container fluid>
        <NavPart />
    <div>Name: main</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <Button variant="primary">Primary</Button>
  </Container>
);
ReactDOM.render(<App />, document.getElementById("app"));
