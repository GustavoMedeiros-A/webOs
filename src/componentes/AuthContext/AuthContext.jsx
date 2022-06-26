import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { loginService } from "../../service/Services";

export const LoginContext = createContext()

const AuthContext = ({children, versao})=>{

    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {

        const u =  JSON.parse(localStorage.getItem("user"))  

        if (u != null) {
            setUser(u)
        }

    }, [])


    const login = async (login, senha)=>{
        console.log('Verificando Login')

        //Consumir o serviço de login
        const u = await loginService(login, senha)
        // console.log("user ", u)

        if (u !== null) {
            localStorage.setItem("token", u.token)
            localStorage.setItem("user", JSON.stringify(u))
            setUser(u)
            navigate("/")
        } else {
            return "login ou senha incorreta"
        } 
    }


    const logout =  (login, senha)=>{
        console.log('Verificando logout')
            setUser(null)

            
            localStorage.removeItem("token")
            localStorage.removeItem("user")

            navigate("/login")

    }


    return(
        <LoginContext.Provider value={
            {"versao": versao ?? "1.0",
            "autenticado": user !== null,
            "user": user,
            login,
            logout}
        }>

            {children}

        </LoginContext.Provider>
    )

}


export default AuthContext