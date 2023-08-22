import React ,{useState, useEffect, useContext} from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const InfoPageMatias =()=> {
    const {store,actions} = useContext(Context)
    const navigate = useNavigate()

    console.log("ESTOY EN INFO PAGEEE: ", store.vehicles)


    return(
        <div className="row">
            <div className="col-2">
                <p>hola amigos jeje </p>
                
                <Link to={`/`} className="btn btn-outline-primary"> Details</Link>
            </div>
        </div>
    )



}


export default InfoPageMatias