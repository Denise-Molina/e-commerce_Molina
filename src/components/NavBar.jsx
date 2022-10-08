import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logoweb from "../img/logoweb.jpg";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <img src={logoweb} className="header_logo" alt="logo" />
        <Navbar.Brand href="#Inicio">Sasha Pasteles</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="enlace" to="/">
            Todos los productos
          </Link>
          <Link className="enlace" to="/categoria/tortas">
            Tortas
          </Link>
          <Link className="enlace" to="/categoria/alfajores">
            Alfajores
          </Link>
          <Link className="enlace" to="/categoria/facturas">
            Facturas
          </Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
