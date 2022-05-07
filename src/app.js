import React from "react";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Addprod from "./pages/Addprod.jsx";
import Removeprod from "./pages/Removeprod.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cadastro" element={<Cadastro />}></Route>
      <Route path="/addprod" element={<Addprod />}></Route>
      <Route path="/removeprod" element={<Removeprod />}></Route>
    </Routes>
  );
}
export default App;
