import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

function NavPart() {
  return (
    <Navbar
      Navbar
      bg="primary"
      data-bs-theme="dark"
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">{process.env.brandname}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#other">Other</Nav.Link>

            <NavDropdown className="bg-primary" title="App Clones">
              <Nav.Link className="bg-primary" href="#insta" bg="primary">
                InstaClone
              </Nav.Link>
            </NavDropdown>
            <NavDropdown title="Design Elements">
              <NavDropdown.Item href="#design/accordian">
                Accordian
              </NavDropdown.Item>
              <NavDropdown.Item href="#design/alert">Alerts</NavDropdown.Item>
              <NavDropdown.Item href="#design/badges">Badges</NavDropdown.Item>
              <NavDropdown.Item href="#design/breadcrumbs">
                Bread Crumbs
              </NavDropdown.Item>
              <NavDropdown.Item href="#design/buttongroup">
                Button Group
              </NavDropdown.Item>
              <NavDropdown.Item href="#design">Other Elements</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavPart;
