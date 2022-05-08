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
  const nomeRef = React.useRef();
  const idfRef = React.useRef();
  const idcatRef = React.useRef();
  const qtdRef = React.useRef();
  const precoRef = React.useRef();
  const estoqueRef = React.useRef();

  const handleSubmit = () => {
    let check = true;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "http://localhost:8000/addprod?nome=" +
        nomeRef.current.value +
        "&sid=" +
        idfRef.current.value +
        "&cid=" +
        idcatRef.current.value +
        "&qtd=" +
        qtdRef.current.value +
        "&preco=" +
        precoRef.current.value +
        "&estoque=" +
        estoqueRef.current.value,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }))
      .catch(function (error) {
        check = false;
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
    if ((check = true)) {
      alert("O Produto foi adicionado!");
    } else {
      alert("Conexão com o banco de dados não estabelecida!");
    }
  };

  if (sessionStorage.getItem("loginF") === null) {
    window.location.href = "/";
    alert("Página não autorizada!");
  }
  return (
    <div>
      <div>
        <h1>Adicionar Produto</h1>
        <section>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Produto"
            ref={nomeRef}
          />
          <br />
          <input
            type="number"
            name="idf"
            placeholder="ID do Fornecedor"
            ref={idfRef}
          />
          <br />
          <input
            type="number"
            name="idcat"
            placeholder="ID da Categoria"
            ref={idcatRef}
          />
          <br />
          <input
            type="text"
            name="qtd"
            placeholder="Quantidade por únidade"
            ref={qtdRef}
          />
          <br />
          <input
            type="number"
            name="preco"
            placeholder="Preço Unitário"
            ref={precoRef}
          />
          <br />
          <input
            type="number"
            name="estoque"
            placeholder="Unidades no estoque"
            ref={estoqueRef}
          />
          <br />
          <button type="button" role="button" onClick={handleSubmit}>
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
  const pidRef = React.useRef();

  const handleSubmit = () => {
    let check = true;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "http://localhost:8000/removeprod?pid=" + pidRef.current.value,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }))
      .catch(function (error) {
        check = false;
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
    if ((check = true)) {
      alert("O Produto foi removido!");
    } else {
      alert("Conexão com o banco de dados não estabelecida!");
    }
  };

  if (sessionStorage.getItem("loginF") === null) {
    window.location.href = "/";
    alert("Página não autorizada!");
  }
  return (
    <div>
      <div>
        <h1>Remover Produto</h1>
        <section>
          <input
            type="number"
            name="pid"
            placeholder="ID do Produto"
            ref={pidRef}
          />
          <br />
          <button type="button" role="button" onClick={handleSubmit}>
            Remover
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
  const uidRef = React.useRef();
  const empresaRef = React.useRef();
  const nomeRef = React.useRef();
  const ocupacaoRef = React.useRef();
  const enderecoRef = React.useRef();
  const cidadeRef = React.useRef();
  const estadoRef = React.useRef();
  const cepRef = React.useRef();
  const numeroRef = React.useRef();
  const faxRef = React.useRef();

  const handleSubmit = () => {
    let check = true;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      "http://localhost:8000/cadastro?uid=" +
        uidRef.current.value +
        "&empresa=" +
        empresaRef.current.value +
        "&nome=" +
        nomeRef.current.value +
        "&ocupacao=" +
        ocupacaoRef.current.value +
        "&endereco=" +
        enderecoRef.current.value +
        "&cidade=" +
        cidadeRef.current.value +
        "&estado=" +
        estadoRef.current.value +
        "&cep=" +
        cepRef.current.value +
        "&numero=" +
        numeroRef.current.value +
        "&fax=" +
        faxRef.current.value,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }))
      .catch(function (error) {
        check = false;
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
    if ((check = true)) {
      alert("Cadastro concluido!");
      window.location.href = "/login";
    } else {
      alert("Conexão com o banco de dados não estabelecida!");
    }
  };

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
            ref={uidRef}
          />
          <br />
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            ref={nomeRef}
          />
          <br />
          <input
            type="text"
            name="ocupacao"
            placeholder="Ocupação"
            ref={ocupacaoRef}
          />
          <br />
          <input
            type="text"
            name="empresa"
            placeholder="Nome da Empresa"
            ref={empresaRef}
          />
          <br />
          <input
            type="text"
            name="endereco"
            placeholder="Endereço"
            ref={enderecoRef}
          />
          <br />
          <input
            type="text"
            name="cidade"
            placeholder="Cidade"
            ref={cidadeRef}
          />
          <br />
          <input
            type="text"
            name="estado"
            placeholder="Estado"
            ref={estadoRef}
          />
          <br />
          <input type="number" name="cep" placeholder="CEP" ref={cepRef} />
          <br />
          <input type="number" name="fone" placeholder="Fone" ref={numeroRef} />
          <br />
          <input type="number" name="fax" placeholder="FAX" ref={faxRef} />
          <br />
          <button type="button" role="button" onClick={handleSubmit}>
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
