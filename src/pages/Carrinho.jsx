import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
function Carrinho() {
  return (
    <React.Fragment>
      <Header />
      <ProductCards header={"Carrinho:"} opt={9} />
      <Footer />
    </React.Fragment>
  );
}
export default Carrinho;
