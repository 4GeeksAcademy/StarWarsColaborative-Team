import React ,{useState, useEffect, useContext} from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const InfoPageMatias =()=> {
    const {store,actions} = useContext(Context)
    const {theid} = useParams() // bien
    const [vehicle, setVehicle]= useState(undefined)

    const getItemById= (theid) => {
        //console.log("TEST2: ", store.vehicles)
        //console.log("TESTING .... ", getStore().vehicles.find(item => item.id === theid)) // buscamos el objeto en la lista de obj vehiculos
        let getVehicle = store.vehicles.find(item => item.id == theid)
        //console.log(getVehicle)
        setVehicle(getVehicle)
        return getVehicle
    }

    console.log(vehicle)
    
    useEffect(()=>{
        actions.obtenerVehiculos() // si no llamo queda vacio vehicles
        //mi funcion con el dato filtrado
        //setVehicle(actions.getItemById(theid))
        console.log("TEST: ", getItemById(theid))
        
    },[])

    useEffect(()=>{
        getItemById(theid)
    },[store.vehicles])

    const styleLetras= {
        color:"rgb(228, 188, 148)",
        fontSize:"15px",
    }

    const styleFondo= {
        backgroundColor:"rgb(20, 16, 12)",  
        borderColor:"3px solid rgb(228, 188, 148)"     
    }

    // {vehicle?.name} //
    // {vehicle != undefined ? <p>si hay</p>: <p>no data</p>}

    return(
        <div className="row">
            <div className="container col-3"></div>
                <div className="container col-6">
                    <div className="shadow p-4 mb-5 rounded text-center" style={styleFondo}>

                        <img src={ `https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`} className="card-img-top mb-3" alt="..." style={{ fontWeight: "medium", fontSize: "25px" }}/>
                        
                        {/* {store.vehicle[0].name} */}
                        <h1 className="fw-blod mb-3" style={{color:"burlywood"}}  >{vehicle?.name} </h1>
                        <hr></hr>
                        <p className="fw-medium" style={styleLetras} >Model: {vehicle?.model}</p>
                        <p className="fw-medium" style={styleLetras} >Manufacturer: {vehicle?.manufacturer}</p>
                        <p className="fw-medium" style={styleLetras} >Cost in credits: {vehicle?.cost_in_credits} 🧇 </p>
                        <p className="fw-medium" style={styleLetras} >Length: {vehicle?.length} meters</p>
                        <p className="fw-medium" style={styleLetras} >Max speed: {vehicle?.max_atmosphering_speed} km/h</p>
                        <p className="fw-medium" style={styleLetras} >Crew: {vehicle?.crew} units</p>
                        <p className="fw-medium" style={styleLetras} >Passengers: {vehicle?.passengers} units</p>
                        <hr></hr>
                        <Link to={`/`} className="btn btn-outline-dark mt-5 p-2">  Go Back   </Link>
                    </div>
                </div>
            <div className="container col-3"></div>
            
        </div>
    )



}


export default InfoPageMatias