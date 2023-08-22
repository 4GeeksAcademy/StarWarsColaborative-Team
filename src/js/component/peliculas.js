import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
// CARD + MAP

const Peliculas = () => {
    const { store, actions } = useContext(Context)


    useEffect(() => {
        actions.obtenerPeliculas()

    }, [])




    return (
        <div>
            <h1 className="text-danger">Films</h1>
            <div className="card-group">
            <div className="d-flex flex-row overflow-scroll">
            {store.films.map((items,id)=>(
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px"}}>
                <img src={"https://starwars-visualguide.com/assets/img/films/"+(id+1)+".jpg" }className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{items.title} </h5>
                    <p className="card-text">{items.opening_crawl} </p>
                    <a href="#" className="btn btn-outline-primary">Learn More</a>
                </div>
            </div>
            ))}
            </div>
            </div>
        </div>
    )
}


export default Peliculas