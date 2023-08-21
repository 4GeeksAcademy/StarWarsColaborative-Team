import React ,{useEffect, useState, useContext} from "react";
import {AiOutlineHeart} from "react-icons/ai"
// CARD + MAP
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
const Personas =()=> {
    const stylePadre = {
		width: "100%",
		overflowX: "scroll",
		overscrollBehaviorX: "contain",
		scrollSnapType: "x proximity",
		maxWidth: "100%",
		display: "flex",
		flexDirection: "row"
	}

    const {store,actions} = useContext(Context)
    const {guardarFavoritos} = actions
    const {peoples} = store
    const navigate = useNavigate()
    useEffect(()=> {
        console.log(store)

    },[store])
    const ShowInfo = (uid)=> {
        navigate(`/infoPageRodrigo/${uid}`)
    }


    return(
        <div className="row">
            <div className="col-12" style={stylePadre}>
            {
                peoples[0]? peoples.map((info)=> {
                    return <div className="card mx-3" style={{ width: "400px", minWidth: "300px", display: "inline-block" }} >
                    <div className="bg-secondary d-flex flex-row justify-content-center align-items-center" style={{ width: "100%", height: "200px" }}>
                        <p style={{ fontWeight: "bold", fontSize: "25px" }} className="text-light">400x200</p>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{info.name}</h5>
                        <p className="card-text p-0 m-1 col-12">Gender:{info.gender}</p>
                        <p className="card-text p-0 m-1 col-12">Hair-Color:{info.hair_color}</p>
                        <p className="card-text p-0 m-1 col-12">Eye-Color:{info.eye_color}</p>
                        <div className="d-flex flex-row justify-content-between">
                            <a onClick={()=>ShowInfo(info.uid)} href="#" className="btn btn-outline-primary">Learn More</a>
                            <button onClick={()=>guardarFavoritos(info.name)} className="btn btn-outline-warning ml-auto">
                                <AiOutlineHeart  />
                            </button>

                        </div>
                    </div>
                </div>
                }) :<div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            }
            </div>
        </div>
    )
}


export default Personas