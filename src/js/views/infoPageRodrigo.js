import React ,{useState, useEffect, useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";


const InfoPageRodrigo =()=> {

    const {theid} = useParams()
    const {store,actions} = useContext(Context)
    const {TraerInfoEspesifica} = actions
    const {PageInfo} = store

    useEffect(()=> {
        TraerInfoEspesifica(theid,"people")
    },[])   

    return(
        <div>
            {
                PageInfo? <p>Existe</p> : <p>No Existe</p>
            }
        </div>
    )
}


export default InfoPageRodrigo