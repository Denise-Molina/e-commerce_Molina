import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoweb from "../img/logoweb.jpg";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
   <Navbar bg="light" variant="light">
      <Container>
        <img src={logoweb} className="header_logo" alt="logo" />
        <Navbar.Brand href="#Inicio">
          Sasha Pasteles
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Inicio">Inicio</Nav.Link>
          <Nav.Link href="#productos">Productos</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
