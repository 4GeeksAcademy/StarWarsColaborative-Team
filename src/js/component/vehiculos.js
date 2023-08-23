import React ,{useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext"; 
import { Link } from "react-router-dom";
// import { Navigate, useNavigate, useParams } from "react-router";
import { AiFillDingtalkSquare, AiOutlineHeart } from 'react-icons/ai';
import { SiStarship } from 'react-icons/si';
// CARD + MAP

const Vehiculos =()=> {
    const {store,actions} = useContext(Context)
    //const navigate = useNavigate()
    //console.log("TEST en Vehiculos: ", store.vehicles)

    const stylePadre = {
        width: "100%",
        overflowX: "scroll",
        overscrollBehaviorX: "contain",
        scrollSnapType: "x proximity",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row"
    }

    return(
        <div>
            {/* react icons
            <AiFillDingtalkSquare style={{color:"red", fontSize:"100px"}} />
            <SiStarship style={{color:"red", fontSize:"100px"}} /> */}

            {/* 
            "name": "Sand Crawler"
            "model": "Digger Crawler"
            "vehicle_class": "wheeled"
            "manufacturer": "Corellia Mining Corporation"
            "crew": "46"
            "cargo_capacity": "50000" 
            */}

            <div className="row py-5">
                <h1 className="text-danger">Vehicles</h1>

                <div className="col-12 " style={stylePadre}>
                    
                {store.vehicles.map((item, index) => (  
                    <div key={index} className="card mx-3" style={{ width: "400px", minWidth: "300px", display: "inline-block" }} >
                            <div key={index} className="bg-secondary d-flex flex-row justify-content-center align-items-center" style={{ width: "100%", height: "200px" }}>
                            <img src={ `https://starwars-visualguide.com/assets/img/vehicles/${item.id}.jpg` } className="card-img-top" alt="..." style={{ fontWeight: "bold", fontSize: "25px" }}/>
                                {/* <p style={{ fontWeight: "bold", fontSize: "25px" }} className="text-light">400x200</p> */}                               
                            </div>

                            <div key={index} className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text p-0 m-1 col-12">{item.model}</p>
                                <p className="card-text p-0 m-1 col-12">{item.vehicle_class}</p>
                                <p className="card-text p-0 m-1 col-12">{item.crew}</p>
                                <p className="card-text p-0 m-1 col-12">{item.cargo_capacity}</p>
                                <p className="card-text p-0 m-1 col-12">{item.manufacturer}</p>
                                <div className="d-flex flex-row justify-content-between">

                                <Link to={`/infoPageMatias/${item.id}`} className="btn btn-outline-primary"> Details</Link>
                                {/* <Link onClick={()=>ShowDetails(item.id)} href="#" className="btn btn-outline-primary">Learn More</Link> */}
                                {/* <a onClick={ShowInfo} href="#" className="btn btn-outline-primary">Learn More</a>
                                <button onClick={()=>guardarFavoritos(info.name)} className="btn btn-outline-warning ml-auto">
                                    <AiOutlineHeart  />
                                </button> */}
                                  <button onClick={()=>actions.guardarFavoritos(item.name)} className="btn btn-outline-warning ml-auto">
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


export default Vehiculos