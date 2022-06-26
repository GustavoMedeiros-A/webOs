import "./Login.css";
import Loading from "../../componentes/Loading/Loading";
import FundoLogin from "../../componentes/FundoLogin/FundoLogin";
import Input from "../../componentes/inputAnimation/Input";
import { useContext, useState } from "react";
import { LoginContext } from "../../componentes/AuthContext/AuthContext";

const Login = () => {
  const [values, setValues] = useState({ login: "", senha: "" });
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  const { login } = useContext(LoginContext);

  const change = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoad(true);
    const msg = await login(values.login, values.senha);
    if (msg != null) {
      setValues({ login: "", senha: "" });
      setLoad(false);
      setError(msg);
    }
  };

  return load ? (
    <Loading />
  ) : (
    <main className="login_content">
      <FundoLogin />
      <div className="user-login">
        <h1 className="user-login__title">Acessar o Sistema</h1>
        <form onSubmit={handleSubmit}>
          <div className="user-login__form-control">
            <Input
              type="text"
              label="login"
              required="1"
              id="login"
              value={values.login}
              onChange={change}
            />
          </div>
          <div className="user-login__form-control">
            <Input
              type="password"
              label="senha"
              required="1"
              id="senha"
              value={values.senha}
              onChange={change}
            />
          </div>
          {error && <p>{error}</p>}
          <button
            type="submit"
            className="ui-button user-login__submit-button ui-button--bordered-green ui-button--rounded"
          >
            Entrar
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
