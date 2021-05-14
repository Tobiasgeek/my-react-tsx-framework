import Axios from 'axios'
const env = {
    domain: "localhost:4200",
    apidomain: "localhost:8000"
}
const register = (data: any) => {
    Axios.post(`${env.apidomain}`, data).then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        logError("register", err)
    })
}

const signin = (data: any) => {
    Axios.post(`${env.apidomain}`, data).then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        logError("register", err)
    })
}

const signout = (data: any) => {
    Axios.post(`${env.apidomain}`, data).then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        logError("register", err)
    })
}

const logError = (apicall: string, err: any) => {
    console.error(err)
    return { code: -1, "api": apicall, "error": err }
}


module.exports = { register, signin, signout }