import { useEffect } from "react";
import { useContext, useState } from "react";
import { LoginContext } from "../../componentes/AuthContext/AuthContext";
import { getOsAbertas, getOsFechadas } from "../../service/Services";


const Home = () => {

  const { versao, user } = useContext( LoginContext )

  const [abertas, setAbertas] = useState(false)
  const [fechadas, setFechadas] = useState(false)

  useEffect(() => {

    const callAbertas = async () => {
      const list = await getOsAbertas()
      setAbertas(list)
    }

    const callFechadas = async () => {
      const list = await getOsFechadas()
      setFechadas(list)
    }

    callAbertas()
    callFechadas()
  }, [])


  return (
    <main>
      <h1>Página Inicial</h1>
      <h2>seu sistema de chamados online</h2>
      <h2>Versão :: {versao}</h2>
      <h2>Nome :: { user == null ? "não está logado": user.nome}</h2>
      <h2>{user == null ? "" : `Existem ${abertas} chamadas abertas`}   </h2>
      <h2>{user == null ? "" : `Existem ${fechadas} chamadas fechadas`}   </h2>

    </main>
  );
};

export default Home;
