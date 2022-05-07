import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDumpster,
  faHouse,
  faBox,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import "../css/header.css";

class Header extends React.Component {
  Teste() {
    fetch("http://localhost:8000/")
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        } else {
          alert("foi");
        }

        this.setState({ totalReactPackages: data.total });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" id="headerfull">
        <Container>
          <Navbar.Brand href="#home" id="brandname">
            <FontAwesomeIcon icon={faDumpster} />
            Projeto Lojinha <span id="brand2">2.0</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#features"
                id="menuhead"
                onClick={() => this.Teste()}
              >
                <FontAwesomeIcon icon={faHouse} id="iconmenu" />
                Início
              </Nav.Link>
              <Nav.Link href="#pricing" id="menuhead">
                <FontAwesomeIcon icon={faBox} id="iconmenu" />
                Produtos
              </Nav.Link>
              <Nav.Link href="#pricing" id="menuhead">
                <FontAwesomeIcon icon={faQuestion} id="iconmenu" />
                Sobre
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" id="cadlogin">
                Cadastro
              </Nav.Link>
              <Nav.Link href="#memes" id="cadlogin">
                Login
              </Nav.Link>
            </Nav>
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
  }
}
export default () => (
  <React.Fragment>
    <Header />
  </React.Fragment>
);
