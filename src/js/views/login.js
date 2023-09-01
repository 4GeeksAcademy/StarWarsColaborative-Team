import React, { useEffect } from "react";

import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const navigate = useNavigate();
    
    console.log("estoy en login")

    const handleLogin = (e) => {
        e.preventDefault()

        // ir a home una vez logeado o a favoritos
        //navigate('/home ?? ???');
        console.log("apretaron login")
    }

    const letras = {"color":"white"}
    return (
            <div className="d-flex justify-content-center mt-5 pb-3">
                <hr/>
                <form className="w-50 bg-dark p-3 m-4 rounded-3" style={letras}>

                    <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>  
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>

                    <button onClick={handleLogin} type="submit" className="btn btn-warning">Submit</button>

                </form>
            </div>
    )

}

export default Login


/*
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>

                <Button onClick={handleLogin} variant="primary" type="submit">
                    Login
                </Button>
            </Form>

*/