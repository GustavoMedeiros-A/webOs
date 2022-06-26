import "./Rodape.css";
import { FaBars, FaPlus, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../AuthContext/AuthContext";

const Rodape = () => {
  const { autenticado, logout } = useContext(LoginContext);

  const handleLogout = () => {

    logout();
  }

  return (
    <div className="footer">
      <ul>
        {autenticado && (
          <li className="list">
            <Link to={"/listagem"}>
              <FaBars />
            </Link>
          </li>
        )}

        {!autenticado && 
          <li className="list">
            <Link to={"/login"}>
              <FaSignInAlt />
            </Link>
          </li>
        }

        {autenticado && 
          <li className="list">
            <span onClick={handleLogout}>
              <FaSignOutAlt />
            </span>
          </li>
        }

      </ul>
      {autenticado && (
        <Link to={"/cadastro"}>
          <div className="iconFab">
            <FaPlus />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Rodape;
