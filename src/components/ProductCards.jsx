import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../css/ProductCards.css";

class Cards extends React.Component {
  render() {
    return <CardBox header={this.props.header} />;
  }
}

async function genarr(data) {
  let produtos = [];
  for (let i = 0; i < data.length; i++) {
    var name = JSON.stringify(data[i]).substring(
      JSON.stringify(data[i]).indexOf(":") + 2,
      JSON.stringify(data[i]).indexOf(",") - 1
    );
    var price = JSON.stringify(data[i]);
    price = price.split(",");
    var pricef = price[14].substring(price[14].indexOf(":") + 1);
    let produto = {
      nome: name,
      preco: pricef,
    };
    produtos[i] = produto;
  }
  return produtos;
}

function CardBox(props) {
  let produtos = [1, 2, 3, 4];
  const [prods, setProds] = useState(produtos);
  useEffect(() => {
    fetch("http://localhost:8000/getprodutos")
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        } else {
          setProds(await genarr(data));
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  return (
    <div id="cardbox">
      <h1>{props.header}</h1>
      <Row xs={1} md={4} className="g-4">
        {prods.map(function (item, i) {
          return (
            <Col>
              <Card border="light" style={{ width: "18rem" }}>
                <Card.Header>{prods[i].nome}</Card.Header>
                <Card.Body>
                  <Card.Title>R$ {prods[i].preco}</Card.Title>
                  <Card.Text>
                    <Button variant="success">
                      <FontAwesomeIcon icon={faCartShopping} id="iconmenu" />
                      Adicionar ao Carrinho
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
        ;
      </Row>
    </div>
  );
}

export default (param) => (
  <React.Fragment>
    <Cards header={param.header} />
  </React.Fragment>
);
