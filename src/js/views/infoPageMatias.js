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


    // {vehicle?.name} //
    // {vehicle != undefined ? <p>si hay</p>: <p>no data</p>}

    return(
        <div className="row">
            {vehicle != undefined ? <p>si hay</p>: <p>no data</p>}
                <div className="col-2">
                    <p>hola amigos</p>
                    <img src={ `https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg`} className="card-img-top" alt="..." style={{ fontWeight: "bold", fontSize: "25px" }}/>

                    {/* {store.vehicle[0].name} */}
                    {vehicle?.name} 
                    <Link to={`/`} className="btn btn-outline-primary"> Details</Link>
                </div>
            
        </div>
    )



}


export default InfoPageMatias