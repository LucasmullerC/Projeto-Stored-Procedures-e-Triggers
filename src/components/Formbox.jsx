import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Formbox.css";
class Login extends React.Component {
  vefLogin() {
    fetch("http://localhost:8000/vefLogin")
      .then(async (response) => {
        const data = await response.json();
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        } else {
          alert("foi");
        }

        this.setState({ totalReactPackages: data.total });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }
  render() {
    if (this.props.login == false) {
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
              <input
                type="number"
                name="numero"
                placeholder="Número de celular"
              />
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
    } else {
      return (
        <div>
          <h1>Login</h1>
          <section>
            <input
              type="text"
              name="uid"
              maxlength="5"
              placeholder="ID de usuário"
            />
            <br />
            <button type="button" role="button">
              Login
            </button>
          </section>
          <p>
            Não tem uma conta? <a href="/cadastro">Cadastre-se!</a>
          </p>
        </div>
      );
    }
  }
}
export default (param) => (
  <React.Fragment>
    <body>
      <div class="form-container">
        <Login login={param.login} />
      </div>
    </body>
  </React.Fragment>
);
