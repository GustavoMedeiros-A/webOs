import "./cabecalho.css";
import { ReactComponent as Logo } from "./logoOS.svg";
import { ReactComponent as Help } from "./help.svg";
import { Link } from "react-router-dom";

const Cabecalho = ({ titulo }) => {
  return (
    <header className="header">
      <Link to={"/"}>
        <Logo />
      </Link>

      <h1 className="title">{titulo}</h1>

      <div className="tap">
        <Link to={"/ajuda"}>
          <Help />
        </Link>
      </div>
    </header>
  );
};

export default Cabecalho;
