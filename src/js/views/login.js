import React, { useEffect, useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { Context } from "../store/appContext"

const Login = () => {

    const { store, actions } = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    console.log("estoy en login");

    const handleLogin = (e) => {
        e.preventDefault()
        actions.LoginUser(email, password)
        //navigate('/home') <<< ver esto para navegar a la pagina principal si todo sale bien
        //console.log("apretaron login", email, " >>> ", password)

        
        navigate('/')
        }

    const letras = {color: "white"};

    return (
        <div className="d-flex justify-content-center mt-5 pb-3">
            <hr/>

            <form className="w-50 bg-dark p-3 m-4 rounded-3" style={letras}>

                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>

                <input 
                type="email"
                className="form-control" 
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}  
                />

                <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
                </div>
                </div>

                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>

                <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
                </div>

                <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>

                <button onClick={handleLogin} type="submit" className="btn btn-warning">
                Submit
                </button>

            </form>
        </div>
    )

}

export default Login;