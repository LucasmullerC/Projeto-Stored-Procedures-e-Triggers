import React from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Addprod from "./pages/Addprod.jsx";
import Removeprod from "./pages/Removeprod.jsx";
import Carrinho from "./pages/Carrinho.jsx";

import Bebidas from "./categories/Bebidas.jsx";
import Carne from "./categories/Carne.jsx";
import Cereiais from "./categories/Cereais.jsx";
import Condimentos from "./categories/Condimentos";
import Confeitos from "./categories/Confeitos.jsx";
import Frutas from "./categories/Frutas.jsx";
import Frutos from "./categories/Frutos.jsx";
import Lacticinios from "./categories/Lacticinios.jsx";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route path="/addprod" element={<Addprod />}></Route>
      <Route path="/removeprod" element={<Removeprod />}></Route>
      <Route path="/carrinho" element={<Carrinho />}></Route>

      <Route path="/bebidas" element={<Bebidas />}></Route>
      <Route path="/carne" element={<Carne />}></Route>
      <Route path="/cereais" element={<Cereiais />}></Route>
      <Route path="/condimentos" element={<Condimentos />}></Route>
      <Route path="/confeitos" element={<Confeitos />}></Route>
      <Route path="/frutos" element={<Frutos />}></Route>
      <Route path="/frutas" element={<Frutas />}></Route>
      <Route path="/lacticinios" element={<Lacticinios />}></Route>
    </Routes>
  );
}
export default App;
