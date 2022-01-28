//This is Header Component that will be rendered on top
//This Component imports Component from react-bootstrap to give responsive NavBar

import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <Navbar className="sticky-top" expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Shopping Items</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Dropdown compotent contains all the dropdowns used in NavBar */}
          <Dropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
