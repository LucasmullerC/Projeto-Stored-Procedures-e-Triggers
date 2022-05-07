import React from "react";
import Header from "../components/Header";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <ProductCards header={"Frutas:"} opt={7} />
      <Footer />
    </React.Fragment>
  );
}
export default Home;
