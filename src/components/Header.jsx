import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumpster,
  faHouse,
  faBox,
  faQuestion,
  faArrowRightFromBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "../css/header.css";

class Header extends React.Component {
  render() {
    return <Headerbar />;
  }
}

const logout = () => {
  sessionStorage.removeItem("login");
  sessionStorage.removeItem("loginF");
};

const Headerbar = () => {
  const Userarea = () => {
    let nameRef = React.useRef();

    //LOGADO FUNCIONARIO
    if (sessionStorage.getItem("loginF") != null) {
      nameRef = sessionStorage.getItem("loginF");
      return (
        <div>
          <NavDropdown title={nameRef} id="cadlogin">
            <NavDropdown.Item href="/addprod">
              <FontAwesomeIcon id="iconmenu" /> Adicionar Produto
            </NavDropdown.Item>
            <NavDropdown.Item href="/removeprod">
              <FontAwesomeIcon id="iconmenu" /> Remover Produto
            </NavDropdown.Item>
            <NavDropdown.Item href="/" onClick={logout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} id="iconmenu" />{" "}
              Sair
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      );
    }
    //DESLOGADO
    else if (sessionStorage.getItem("login") === null) {
      return (
        <div>
          <Nav id="guest">
            <Nav.Link href="/cadastro" id="cadlogin">
              Cadastro
            </Nav.Link>
            <Nav.Link href="/login" id="cadlogin">
              Login
            </Nav.Link>
          </Nav>
        </div>
      );
    } //LOGADO CLIENTE
    else {
      nameRef = sessionStorage.getItem("login");
      return (
        <div>
          <NavDropdown title={nameRef} id="cadlogin">
            <NavDropdown.Item href="#action/3.1">
              <FontAwesomeIcon icon={faCartShopping} id="iconmenu" /> Carrinho
            </NavDropdown.Item>
            <NavDropdown.Item href="/" onClick={logout}>
              <FontAwesomeIcon icon={faArrowRightFromBracket} id="iconmenu" />{" "}
              Sair
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      );
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" id="headerfull">
      <Container>
        <Navbar.Brand href="/" id="brandname">
          <FontAwesomeIcon icon={faDumpster} />
          Projeto Lojinha <span id="brand2">2.0</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" id="menuhead">
              <FontAwesomeIcon icon={faHouse} id="iconmenu" />
              Início
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle id="menuhead">
                <FontAwesomeIcon icon={faBox} id="iconmenu" />
                Produtos
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/bebidas">Bebidas</Dropdown.Item>
                <Dropdown.Item href="/condimentos">Condimentos</Dropdown.Item>
                <Dropdown.Item href="/confeitos">Confeitos</Dropdown.Item>
                <Dropdown.Item href="/lacticinios">Lacticínios</Dropdown.Item>
                <Dropdown.Item href="/cereais">Grãos/cereais</Dropdown.Item>
                <Dropdown.Item href="/carne">Carne/Aves</Dropdown.Item>
                <Dropdown.Item href="/frutas">Frutas</Dropdown.Item>
                <Dropdown.Item href="/frutos">Frutos do mar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#pricing" id="menuhead">
              <FontAwesomeIcon icon={faQuestion} id="iconmenu" />
              Sobre
            </Nav.Link>
          </Nav>
          <Userarea />
          <div class="group">
            <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
              </g>
            </svg>
            <input placeholder="Procurar" type="search" class="input"></input>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default () => (
  <React.Fragment>
    <Header />
  </React.Fragment>
);
