import { format } from "date-fns";
import { parseISO } from "date-fns";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cards from "../../componentes/Cards/Cards";
import Input from "../../componentes/inputAnimation/Input";
import Loading from "../../componentes/Loading/Loading";
import { getCategorias, gravarOs } from "../../service/Services";

const Cadastro = () => {
    const [values, setValues] = useState({ 
        "nome": "", 
        "descricao": "",
        "categoria": 0,
        "dataPrevisaoFechamento": ""
    });
    const [load, setLoad] = useState(false);
    const [categ, setCateg] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {

    const call = async () => {
      setLoad(true)
      const list = await getCategorias()
      console.log(list) 
      setCateg(list) 
      setLoad(false)
    }

    call()

    }, [])

    const change = (e) => {
      const {value, name} = e.target;
      
      setValues({...values, [name]: value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setLoad(true);

      const dt = format(parseISO(values.dataPrevisaoFechamento), "dd/MM/yyyy")

      values.dataPrevisaoFechamento = dt

      const msg = await gravarOs(values);
      console.log(msg)
      
      setLoad(false);      

      navigate("/listagem")
    }

  return load  ? 
  <Loading/>
  : (
    <Cards titulo="Cadastro de OS">
      <form onSubmit={handleSubmit}>
        <div className="user-login__form-control">
          <Input type="text" label="nome" required="1" 
              id="nome"
              value={values.nome}
              onChange={change}
              />
        </div>

        <div className="user-login__form-control">
          <Input type="text" label="descrição" required="1"  
              id="descricao"
              value={values.descricao}
              onChange={change}
          />
        </div>

        <div className="user-login__form-control">
          <Input type="select" label="categoria" required="1" 
          itens={categ}
              id="categoria"
              value={values.categoria}
              onChange={change}/>
              
        </div>

        <div className="user-login__form-control">
          <Input type="date" label="data previsão" required="1" 
              id="dataPrevisaoFechamento"
              value={values.dataPrevisaoFechamento}
              onChange={change}/>
        </div>

        <button
          type="submit"
          className="ui-button user-login__submit-button ui-button--bordered-green ui-button--rounded"
        >
          Salvar
        </button>
      </form>
    </Cards>
  );
};

export default Cadastro;
