import React from "react";
import Header from "../components/Header";
import ProductCards from "../components/ProductCards";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <ProductCards header={"Todos os produtos:"} />
    </React.Fragment>
  );
}
export default Home;
