import React from "react";
import Header from "../components/Header";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <ProductCards header={"Carnes / Aves:"} opt={6} />
      <Footer />
    </React.Fragment>
  );
}
export default Home;
