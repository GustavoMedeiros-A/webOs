import Cards from "../../componentes/Cards/Cards";
import Card from "../../componentes/Card/Card";
import "./Listagem.css";
import { useState } from "react";
import Loading from "../../componentes/Loading/Loading";
import { useEffect } from "react";
import { getMyOs, getFecharOs } from "../../service/Services";
import { useNavigate } from "react-router-dom";


const Listagem = () => {

  const [myOs, setMyOs] = useState([])
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
    const call = async () => {
      setLoad(true)
      const list = await getMyOs() 
      setMyOs(  list  )
      setLoad(false)
    }

    call()


  }, [])


  const fechar = async (index) => {
    console.log('funcionando')
    getFecharOs(index)
    navigate('/')

  }

  return (
    <Cards titulo="Página de Listagem">

      {myOs && myOs.map( (os, index ) => 
        <button onClick={() => {fechar(index+1)} } id='button'  key={index}><Card os={os} key={index} ></Card></button>
      )}
    </Cards>
  );
};

export default Listagem;
