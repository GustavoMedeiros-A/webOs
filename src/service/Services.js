const URL = "https://todo-uni.herokuapp.com"

//Transformando em assíncrono
const loginService = async (login, senha) => {

    const u = {
        "login": login,
        "password": senha
    }

    console.log(u)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(u)
    };

    const resp = await fetch(`${URL}/login`, requestOptions )
    // .then(response => response.json())
    // .then(result => result)
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        console.log(r)
        return r
    } else {
        return null;
    }
}

const getCategorias = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const resp = await fetch(`${URL}/api/os/categoria`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        return r
    } else {
        return null;
    }
}

const gravarOs = async (os) => {

    console.log(os)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(os)
    };

    const resp = await fetch(`${URL}/api/os`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        console.log(r)
        return r
    } else {
        return null;
    }
}

const getMyOs = async () => {



    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const resp = await fetch(`${URL}/api/os`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        return r
    } else {
        return null;
    }
}

const getOsAbertas = async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const resp = await fetch(`${URL}/api/os/abertas/count`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        return r
    } else {
        return null;
    }
}

const getOsFechadas= async () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "GET",
        headers: myHeaders
    };

    const resp = await fetch(`${URL}/api/os/fechadas/count`, requestOptions )
    .catch(error => console.log('error', error))

    if (resp.ok) {
        const r = await resp.json()
        return r
    } else {
        return null;
    }
}


const getFecharOs = async (index) => {

    console.log(index)

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}`)

    var requestOptions = {
        method: "PUT",
        headers: myHeaders
    };

    const resp = await fetch(`${URL}/api/os/${index}/fechar`, requestOptions )
    .catch(error => console.log('error', error))

    console.log('ta funcionando')
    console.log(index)

    if (resp.ok) {
        const r = await resp.json()
        return r
    } else {
        return null;
    }
}


export {loginService, getCategorias, gravarOs, getMyOs, getOsAbertas, getFecharOs, getOsFechadas}