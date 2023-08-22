import React ,{useState, useEffect, useContext} from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const InfoPageMatias =()=> {
    const {store,actions} = useContext(Context)
    const {theid} = useParams()
    const [vehicle, setVehicle]= useState(null)

    console.log(vehicle)
    useEffect(()=>{
        //mi funcion con el dato filtrado
        setVehicle(actions.getItemById(theid))
    },[])

    return(
        <div className="row">
            <div className="col-2">
                <p>hola amigos jeje </p>
                <img src={ `https://starwars-visualguide.com/assets/img/vehicles/${theid}.jpg` } className="card-img-top" alt="..." style={{ fontWeight: "bold", fontSize: "25px" }}/>
                {/* {store.vehicle[0].name} */}
                {/* {vehicle.name} */}
                <Link to={`/`} className="btn btn-outline-primary"> Details</Link>
            </div>
        </div>
    )



}


export default InfoPageMatias