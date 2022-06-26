import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "../../componentes/AuthContext/AuthContext";
import Cabecalho from "../../componentes/Cabecalho/cabecalho";
import PrivateRoute from "../../componentes/Private/private";
import Rodape from "../../componentes/Rodape/Rodape";
import Ajuda from "../Ajuda/Ajuda";
import Cadastro from "../Cadastro/Cadastro";
import Home from "../Home/Home";
import Listagem from "../Listagem/Listagem";
import Login from "../Login/Login";
import "./Principal.css";

const Principal = () => {
  return (
    <BrowserRouter>
      <AuthContext versao={"1.8"}>

        <div className="board">
          <Cabecalho titulo="Web OS" />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />

            <Route path="/ajuda" element={<Ajuda />} />

            <Route path="/cadastro" element={<PrivateRoute><Cadastro /></PrivateRoute> } />

            <Route path="/listagem" element={<PrivateRoute><Listagem /></PrivateRoute> } />
          </Routes>
          <Rodape />
        </div>

      </AuthContext>
    </BrowserRouter>
  );
};

export default Principal;
