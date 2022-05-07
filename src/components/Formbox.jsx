import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Formbox.css";
class Form extends React.Component {
  render() {
    // Cadastro
    if (this.props.login === 1) {
      return <CadastroForm />;
      // LOGIN
    } else if (this.props.login === 2) {
      return <LoginForm />;
    } else if (this.props.login === 3) {
      return <AddPForm />;
    } else if (this.props.login === 4) {
      return <RemovePForm />;
    }
  }
}
const AddPForm = () => {
  if (sessionStorage.getItem("loginF") === null) {
    window.location.href = "/";
    alert("Página não autorizada!");
  }
  return (
    <div>
      <div>
        <h1>Adicionar Produto</h1>
        <section>
          <input type="number" name="uid" placeholder="ID do Produto" />
          <br />
          <input type="text" name="nome" placeholder="Nome do Produto" />
          <br />
          <input type="number" name="idf" placeholder="ID do Fornecedor" />
          <br />
          <input type="number" name="idcat" placeholder="ID da Categoria" />
          <br />
          <input
            type="text"
            name="cidade"
            placeholder="Quantidade por únidade"
          />
          <br />
          <input type="number" name="preco" placeholder="Preço Unitário" />
          <br />
          <input
            type="number"
            name="estoque"
            placeholder="Unidades no estoque"
          />
          <br />
          <button type="button" role="button">
            Adicionar
          </button>
        </section>
        <a href="/removeprod">Remover Produtos</a>
        <br />
        <a href="/">Voltar</a>
      </div>
    </div>
  );
};
const RemovePForm = () => {
  if (sessionStorage.getItem("loginF") === null) {
    window.location.href = "/";
    alert("Página não autorizada!");
  }
  return (
    <div>
      <div>
        <h1>Remover Produto</h1>
        <section>
          <input type="number" name="uid" placeholder="ID do Produto" />
          <br />
          <button type="button" role="button">
            Adicionar
          </button>
        </section>
        <a href="/addprod">Adicionar Produtos</a>
        <br />
        <a href="/">Voltar</a>
      </div>
    </div>
  );
};

const CadastroForm = () => {
  return (
    <div>
      <div>
        <h1>Cadastro</h1>
        <section>
          <input
            type="text"
            name="uid"
            maxlength="5"
            placeholder="ID de usuário"
          />
          <br />
          <input type="text" name="nome" placeholder="Nome completo" />
          <br />
          <input type="text" name="ocupacao" placeholder="Ocupação" />
          <br />
          <input type="text" name="endereco" placeholder="Endereço" />
          <br />
          <input type="text" name="cidade" placeholder="Cidade" />
          <br />
          <input type="text" name="estado" placeholder="Estado" />
          <br />
          <input type="number" name="cep" placeholder="CEP" />
          <br />
          <input type="number" name="fone" placeholder="Fone" />
          <br />
          <input type="number" name="fax" placeholder="FAX" />
          <br />
          <button type="button" role="button">
            Cadastrar
          </button>
        </section>
        <p>
          Já uma conta? <a href="/login">faça o Login!</a>
        </p>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const uidRef = React.useRef();
  const optRef = React.useRef();

  const handleSubmit = () => {
    if (optRef.current.value === "Funcionario") {
      fetch("http://localhost:8000/vefLoginFunc?uid=" + uidRef.current.value)
        .then(async (response) => {
          const data = await response.json();
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          } else {
            var name = JSON.stringify(data).substring(
              JSON.stringify(data).indexOf(":") + 2,
              JSON.stringify(data).indexOf(",") - 1
            );
            if (name === "[") {
              document.getElementById("errortxt").style.display = "block";
            } else {
              sessionStorage.setItem("loginF", name);
              alert(
                "Bem-vindo(a) novamente " +
                  sessionStorage.getItem("loginF") +
                  "!"
              );
              window.location.href = "/";
            }
          }

          this.setState({ totalReactPackages: data.total });
        })
        .catch((error) => {
          this.setState({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    } else {
      fetch("http://localhost:8000/vefLogin?uid=" + uidRef.current.value)
        .then(async (response) => {
          const data = await response.json();
          // check for error response
          if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
          } else {
            var name = JSON.stringify(data).substring(
              JSON.stringify(data).indexOf(":") + 2,
              JSON.stringify(data).indexOf(",") - 1
            );
            if (name === "[") {
              document.getElementById("errortxt").style.display = "block";
            } else {
              sessionStorage.setItem("login", name);
              alert(
                "Bem-vindo(a) novamente " +
                  sessionStorage.getItem("login") +
                  "!"
              );
              window.location.href = "/";
            }
          }

          this.setState({ totalReactPackages: data.total });
        })
        .catch((error) => {
          this.setState({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <p id="errortxt">ID de usuário não encontrado!</p>
      <section>
        <input
          type="text"
          name="uid"
          maxlength="5"
          placeholder="ID de usuário"
          ref={uidRef}
        />
        <br />
        <select name="opt" ref={optRef}>
          <option value="Cliente">Cliente</option>
          <option value="Funcionario">Funcionário</option>
        </select>
        <br />
        <br />
        <button type="button" role="button" onClick={handleSubmit}>
          Login
        </button>
      </section>
      <p>
        Não tem uma conta? <a href="/cadastro">Cadastre-se!</a>
      </p>
    </div>
  );
};

export default (param) => (
  <React.Fragment>
    <body>
      <div class="form-container">
        <Form login={param.login} />
      </div>
    </body>
  </React.Fragment>
);
