import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "./../assets/ppq-p.png";

function Navbars() {
  return (
    <Navbar expand="lg" className="bg-primary text-white" data-bs-theme="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#">
          <img src={logo} alt="" style={{ width: "200px" }}></img>
        </Navbar.Brand>

        {/* <div> */}
        <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
        <Navbar.Collapse className="text-white justify-content-end">
          <Nav
            className="my-2 my-lg-0 text-white"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#tentang" className="text-white">
              Tentang
            </Nav.Link>
            <Nav.Link href="#unit" className="text-white">
              Unit
            </Nav.Link>
            <Nav.Link href="#hubungi" className="text-white">
              Hubungi Kami
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </div> */}
      </Container>
    </Navbar>
  );
}

export default Navbars;
