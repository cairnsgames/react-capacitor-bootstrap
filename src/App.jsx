import React, { useEffect } from "react";
import { createRoot } from "react-dom";
import { Container } from "react-bootstrap";
import "./app.scss";

import NavPart from "./parts/nav";
import DesignElements from "./pages/design/designelements";
import useLocation from "./hooks/uselocation";
import LoginPage from "./pages/login/loginpage";
import RegisterPage from "./pages/login/registerpage";
import ForgotPasswordPage from "./pages/login/forgotpasswordpage";
import InstaClone from "./apps/instaclone/instaclone";
import WhatsappClone from "./apps/whatsapp/whatsapp";
import Examples from "./getbootstrapexamples/examples";
import Providers from "./providers/providers";

const App = () => {
  const { hash } = useLocation();

  return (
    <Providers>
      <Container fluid>
        <NavPart />
        {hash.startsWith("design") && <DesignElements />}
        {hash.startsWith("login") && <LoginPage />}
        {hash.startsWith("register") && <RegisterPage />}
        {hash.startsWith("forgot") && <ForgotPasswordPage />}
        {hash.startsWith("insta") && <InstaClone />}
        {hash.startsWith("whatsapp") && <WhatsappClone />}
        {hash.startsWith("examples") && <Examples />}
      </Container>
    </Providers>
  );
};
const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(<App />);
