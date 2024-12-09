import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "/dns.png";
import "../index.css";

function NavbarPage() {
  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand href="#" className="d-flex align-items-center">
          <img src={logo} alt="Company Logo" className="navbar-logo ms-5" />
        </Navbar.Brand>
        <div className="text-center">
          <h3 className="mt-5 text-white">
            <span className="text-info">DEEP</span> NET
          </h3>
          <h3 className="text-secondary">SOFT</h3>
        </div>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton className=""></Offcanvas.Header>

          <Offcanvas.Body className="bg-black">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/createMenu" className="nav-link text-white">
                HOME
              </Nav.Link>
              <Nav.Link href="/" className="nav-link text-white">
                MENU
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-link text-white">
                MAKE A RESERVATION
              </Nav.Link>
              <Nav.Link href="#action2" className="nav-link text-white">
                CONTACT US
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
