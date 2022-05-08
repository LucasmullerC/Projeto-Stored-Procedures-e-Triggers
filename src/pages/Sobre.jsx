import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Sobre() {
  return (
    <React.Fragment>
      <Header />
      <div id="cardbox">
        <h1>Projeto de Stored Procedures e Triggers</h1>
        <h1>🌐 Objetivo / Our Goal</h1>
        <p>
          O projeto consiste em implementar uma interface gráfica e uma conexão
          com o banco de dados em qualquer linguagem de programação e framework
          desejado, a única restrição é que deve ser utilizado o banco de dados
          SQL Server contendo as seguintes funcionalidades:
        </p>
        <ul>
          <li>
            1. Visualização / Inserção / remoção / atualização de clientes
          </li>
          <li>2. Visualização de compras</li>
          <li>3. Inserção de uma compra com vários produtos</li>
          <li>
            4. Crie um procedimento armazenado para retornar algum relatório a
            ser exibido [não utilize nenhum da prova] 5. Crie algum gatilho que
            deva ser executado ao realizar a inserção do item 3 [não utilize
            nenhum da prova]
          </li>
        </ul>
        <h1>❓Sobre / About</h1>
        <p>
          Como contexto para a interface utilizamos o "Projeto Lojinha" em
          homenagem a um dos nossos primeiros
          <a href="https://github.com/LucasmullerC/Projeto-Lojinha">
            "Projetos"
          </a>
          na úniversidade.
        </p>

        <h1>Frameworks, Libraries e Programas utilizados:</h1>
        <li>ReactJS - FrontEnd</li>
        <li>Bootstrap - CSS,FrontEnd</li>
        <li>ExpressJS - Backend e Comunicação com o Banco de dados</li>
        <li>Docker - Host do Banco de dados</li>
        <li>SQL Server - Edição do Banco de dados</li>
        <li>Banco de dados Northwind</li>
        <h1>👥 Grupo / Group</h1>
        <table>
          <tr>
            <td align="center">
              <a href="https://github.com/LucasmullerC">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://lucasmullerc.github.io/ClimaEmCasa/img/foto%20muller.png"
                  width="100px;"
                  alt=""
                />
                <br />
                <sub>
                  <b>Lucas Müller</b>
                </sub>
              </a>
              <br />
              <a href="https://github.com/LucasmullerC" title="Rocketseat">
                🚀
              </a>
            </td>
            <td align="center">
              <a href="https://github.com/AngelomBot">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://lucasmullerc.github.io/ClimaEmCasa/img/foto%20joao.png"
                  width="100px;"
                  alt=""
                />
                <br />
                <sub>
                  <b>João Vitor</b>
                </sub>
              </a>
              <br />
              <a href="https://github.com/AngelomBot" title="Rocketseat">
                🚀
              </a>
            </td>
            <td align="center">
              <a href="https://github.com/dashp21">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://lucasmullerc.github.io/ClimaEmCasa/img/foto%20thobias.png"
                  width="100px;"
                  alt=""
                />
                <br />
                <sub>
                  <b>Raffael Thobias</b>
                </sub>
              </a>
              <br />
              <a href="https://github.com/dashp21" title="Rocketseat">
                🚀
              </a>
            </td>
            <td align="center">
              <a href="https://github.com/ViniLopes87">
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://avatars.githubusercontent.com/u/71892190?v=4"
                  width="100px;"
                  alt=""
                />
                <br />
                <sub>
                  <b>Vinícius Lopes</b>
                </sub>
              </a>
              <br />
              <a href="https://github.com/ViniLopes87" title="Rocketseat">
                🚀
              </a>
            </td>
          </tr>
        </table>
      </div>

      <Footer />
    </React.Fragment>
  );
}
export default Sobre;
