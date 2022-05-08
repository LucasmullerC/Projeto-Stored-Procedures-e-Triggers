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
    return <CardBox header={this.props.header} opt={this.props.opt} />;
  }
}

async function home(data) {
  let produtos = [];
  for (let i = 0; i < data.length; i++) {
    //nome
    var name = JSON.stringify(data[i]).substring(
      JSON.stringify(data[i]).indexOf(":") + 2,
      JSON.stringify(data[i]).indexOf(",") - 1
    );
    //preço
    var price = JSON.stringify(data[i]);
    price = price.split(",");
    var pricef = price[14].substring(price[14].indexOf(":") + 1);
    //qtd
    var quant = JSON.stringify(data[i]);
    quant = quant.split(",");
    var qtdf = quant[22].substring(quant[22].indexOf(":") + 1);
    //ID
    var prodid = JSON.stringify(data[i]);
    prodid = prodid.split(",");
    var prodf = prodid[30].substring(prodid[30].indexOf(":") + 1);
    let produto = {
      nome: name,
      preco: pricef,
      qtd: qtdf,
      pid: prodf,
    };
    produtos[i] = produto;
  }
  return produtos;
}

function CardBox(props) {
  let produtos = [1, 2, 3, 4];
  const [prods, setProds] = useState(produtos);
  useEffect(() => {
    let sql = "";
    if (props.opt === "home") {
      sql = "http://localhost:8000/getprodutos";
    } else if (props.opt === 9) {
      if (!sessionStorage.getItem("carrinho") == "") {
        let cprods = sessionStorage.getItem("carrinho").split(",");
        const idsprod = cprods.slice(0, -1);
        sql = "http://localhost:8000/getprodutosbyid?ids=" + idsprod;
      }
    } else {
      sql = "http://localhost:8000/getcategoria?cid=" + props.opt;
    }
    fetch(sql)
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        } else {
          setProds(await home(data));
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  const handleSubmit = (prodc) => {
    if (!sessionStorage.getItem("carrinho") == "") {
      sessionStorage.setItem(
        "carrinho",
        sessionStorage.getItem("carrinho") + prodc.pid + ","
      );
    } else {
      sessionStorage.setItem("carrinho", prodc.pid + ",");
    }
    alert("Item " + prodc.nome + " Adicionado ao carrinho!");
  };
  function vefbtn() {
    if (props.opt === 9) {
      return "none";
    } else {
      return "block";
    }
  }
  function FinalizarCompra() {
    if (prods.length != 0) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      };
      prods.forEach((element) => {
        let quant = 0;
        if (element.qtd != 0) {
          quant = element.qtd - 1;
        }
        fetch(
          "http://localhost:8000/atualizarprod?pid=" +
            element.pid +
            "&preco=" +
            element.preco +
            "&qtd=" +
            quant,
          requestOptions
        )
          .then((response) => response.json())
          .then((data) => this.setState({ postId: data.id }))
          .catch(function (error) {
            console.log(
              "There has been a problem with your fetch operation: " +
                error.message
            );
          });
      });
      alert("Compra finalizada!");
      sessionStorage.removeItem("carrinho");
      window.location.href = "/carrinho";
    }
  }

  const Carrinho = () => {
    if (props.opt === 9) {
      return (
        <div>
          <Button
            style={{ width: "100%", fontSize: "40px" }}
            onClick={() => FinalizarCompra()}
          >
            Finalizar Compra
          </Button>
        </div>
      );
    }
  };
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
                    <p id="qtdtxt">Quantidade no estoque: {prods[i].qtd}</p>
                    <br />

                    <Button
                      variant="success"
                      onClick={() => handleSubmit(prods[i])}
                      style={{ display: vefbtn() }}
                    >
                      <FontAwesomeIcon icon={faCartShopping} id="iconmenu" />
                      Adicionar ao Carrinho
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Carrinho />
    </div>
  );
}

export default (param) => (
  <React.Fragment>
    <Cards header={param.header} opt={param.opt} />
  </React.Fragment>
);
