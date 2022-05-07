import React from "react";
import Header from "../components/Header";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
function Home() {
  return (
    <React.Fragment>
      <Header />
      <ProductCards header={"Condimentos:"} opt={2} />
      <Footer />
    </React.Fragment>
  );
}
export default Home;
