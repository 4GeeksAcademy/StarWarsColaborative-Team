import React, { useEffect, useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { Context } from "../store/appContext"

const Signup = () => {

    const { store, actions } = useContext(Context)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isActive, setIsActive] = useState(false)

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault()
        actions.SignupUser(username,email, password, isActive)
        //navigate('/home') <<< ver esto para navegar a la pagina principal si todo sale bien
        console.log("apretaron signup", username, ">>>", email, " >>> ", password," >>> ",isActive)
        navigate('/login')
        }

    const letras = {color: "white"};

//     {"username" : "matias",
//     "email" : "matias",
//     "password" : "matias",
//     "is_active": true
//    }

    return (

        <div className="d-flex justify-content-center mt-5 pb-3">
            <hr/>

            <form className="w-50 bg-dark p-3 m-4 rounded-3" style={letras}>
                <h2 className="text-center mt-2 mb-4">Join to the Order</h2>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>

                    <input 
                    type="username"
                    className="form-control" 
                    id="username"
                    aria-describedby="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}  
                    />

                    <div id="emailHelp" className="form-text">
                    May the Force be with you.
                    </div>
                </div>


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
                    May the security be with your email.
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
                    <div id="emailHelp" className="form-text">
                    May the password shield you from the dark side of the internet.
                    </div>

                </div>

                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>

                    <input 
                    type="checkbox"
                    className="form-check-input" 
                    id="exampleCheck1"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)} 
                    />

                    <label className="form-check-label mb-3" htmlFor="exampleCheck1">light saber on? </label>
                </div>

                <button onClick={handleSignup} type="submit" className="btn btn-warning">
                Submit new Jedi
                </button>

            </form>
        </div>
    )

}

export default Signup;