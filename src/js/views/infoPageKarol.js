import React ,{useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const InfoPageKarol =()=> {
    const { store, actions } = useContext(Context)
    const params = useParams()
    const stylePadre = {
      width: "100%",
      overflowX: "scroll",
      overscrollBehaviorX: "contain",
      scrollSnapType: "x proximity",
      maxWidth: "100%",
      display: "flex",
      flexDirection: "row",
    };

    useEffect(() => {
        actions.obtenerPeliculaIndividual(params.theid)
        console.log(params.theid)

    }, [])





    return(
        <div class="card mb-3 bg-dark" style={stylePadre}>
        <img src={"https://starwars-visualguide.com/assets/img/films/"+(params.theid)+".jpg" } class="card-img-top" alt="..." />
        <div class="card-body text-white">
         <h1 class="card-title">{store.film.title} {store.film.episode_id} </h1>
          <p class="card-text">{store.film.opening_crawl} </p>
          <p class="card-text"><h5>Director</h5> {store.film.director} </p> 
          <p class="card-text"><h5>Productor</h5> {store.film.producer} </p> 
          <p class="card-text"><h5>Fecha de Estreno</h5> {store.film.release_date} </p> 
        </div>
      </div>
    )
}


export default InfoPageKarol