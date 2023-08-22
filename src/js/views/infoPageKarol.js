import React ,{useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

const InfoPageKarol =()=> {
    const { store, actions } = useContext(Context)
    const params = useParams()

    useEffect(() => {
        actions.obtenerPeliculaIndividual(params.theid)
        console.log(params.theid)

    }, [])





    return(
        
        <div class="card mb-3">
        <img src={"https://starwars-visualguide.com/assets/img/films/"+(params.theid)+".jpg" } class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{store.film.title} {store.film.episode_id} </h5>
          <p class="card-text">{store.film.opening_crawl} </p>
          

        </div>
      </div>
    )
}


export default InfoPageKarol