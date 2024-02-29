import React from "react";
import { createRoot } from "react-dom";
import { Container } from "react-bootstrap";
import "./app.scss";

import NavPart from "./parts/nav";
import DesignElements from "./pages/design/designelements";
import useLocation from "./hooks/uselocation";
import LoginPage from "./pages/login/loginpage";

const App = () => {
  const { hash } = useLocation();

  console.log("HASH", hash)
  return (
    <Container fluid>
      <NavPart />
      {hash.startsWith("design") && <DesignElements />}
      {hash.startsWith("login") && <LoginPage />}
    </Container>
  );
};
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <App />
);
