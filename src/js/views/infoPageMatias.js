import React ,{useState, useEffect, useContext} from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";

const InfoPageMatias =()=> {
    const { store, actions } = useContext(Context);




    return(
        <div className="row">
            <div className="col-2">
                <button  onClick={()=> navigate("/")} className="btn btn-primary">Back to Home</button>
            </div>
        </div>
    )



}


export default InfoPageMatias