import "./Card.css";
import order from "./img/purchase-order-80.png";

const Card = ({ os }) => {
  const {
    nome,
    categoria,
    dataAbertura,
    usuario,
    status,
    dataPrevisaoFechamento,
  } = os;

  

  return (
    <div className="card">
      <div className="data">
        <div className="nome long-and-truncated">{nome}</div>
        <div className="niver">
          <div>
            <span>Categoria:</span> {categoria.nome}{" "}
          </div>
          <div>
            <span>Data Abertura:</span> {dataAbertura}
          </div>
          <div>
            <span>Data Fechamento:</span> {dataPrevisaoFechamento}
          </div>
          <div>
            <span>Status:</span> {status}
          </div>
          <div>
            <span>Usuário:</span> {usuario.nome}
          </div>
        </div>
      </div>

      <div className="image">
        <img src={order} alt="fest" />
      </div>
    </div>
  );
};

export default Card;
