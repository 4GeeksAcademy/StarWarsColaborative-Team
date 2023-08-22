import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import {AiOutlineHeart} from "react-icons/ai"
// CARD + MAP

const Peliculas = () => {
    const { store, actions } = useContext(Context) 
    const {guardarFavoritos} = actions
    


    useEffect(() => {
        actions.obtenerPeliculas()

    }, [])

console.log("hola")


    return (
        <div>
            <h1 className="text-danger">Films</h1>
            <div className="card-group">
            <div className="d-flex flex-row overflow-scroll py-5">
            {store.films.map((items,id)=>(
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px"}}>
                <img src={"https://starwars-visualguide.com/assets/img/films/"+(id+1)+".jpg" }className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{items.title} {items.episode_id}</h5>
                    <div className="d-flex flex-row justify-content-between">
                    <Link to={"/infoPageKarol/"+(items.id) }className="btn btn-outline-primary">Learn More</Link>
                    <button onClick={()=>guardarFavoritos(items.title)} className="btn btn-outline-warning ml-auto">
                                <AiOutlineHeart  />
                            </button>
                </div>
                 </div>
        
            
            </div>
            ))}
            </div>
            </div>
        </div>
    )
}


export default Peliculas