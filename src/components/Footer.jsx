import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default () => (
  <React.Fragment>
    <Navbar id="headerfull">
      <Container>
        <p id="menuhead">
          Conheça o projeto pelo{" "}
          <a href="https://github.com/LucasmullerC/Projeto-Stored-Procedures-e-Triggers">
            GitHub!
          </a>
        </p>
      </Container>
    </Navbar>
  </React.Fragment>
);
