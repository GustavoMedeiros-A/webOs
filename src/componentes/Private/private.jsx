import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../AuthContext/AuthContext"


const PrivateRoute = ({ children }) => {

    const { autenticado } = useContext(LoginContext);
    const nav = useNavigate()

    useEffect(() => {
        if (!autenticado) {
            nav("/login")
        }
    }, [autenticado, nav])

    return children


}


export default PrivateRoute