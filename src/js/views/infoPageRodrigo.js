import React ,{useState, useEffect, useContext} from "react";
import { Navigate, useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";


const InfoPageRodrigo =()=> {

    const {theid} = useParams()
    const {store,actions} = useContext(Context)
    const navigate = useNavigate()
    const {TraerInfoEspesifica} = actions
    const {PageInfo} = store

    useEffect(()=> {
        TraerInfoEspesifica(theid,"people")
        console.log(theid)
    },[])   

    return(
        <div className="">
            {
                PageInfo? <div className="container">
                    <div className="row">
                        <img src={"https://starwars-visualguide.com/assets/img/characters/" + theid +".jpg"} className="col-6 p-2" style={{height:"auto"}}/>
                        <div className="col-6 p-3 d-flex flex-column justify-content-center">
                            <h2>{PageInfo.name}</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. </p>
                        </div>
                    </div>
                    <div className="row info py-5 border-top border-1 border-dark">
                        <div className="col-6">
                            <div className="row"><p><strong className="text-danger opacity-50">Name</strong>:{PageInfo.name}</p></div>
                            <div className="row"><p><strong className="text-danger opacity-50">Height</strong>:{PageInfo.height}</p></div>
                            <div className="row"><p><strong className="text-danger opacity-50">Mass</strong>:{PageInfo.mass}</p></div>
                            <div className="row"><p><strong className="text-danger opacity-50">Hair-Color</strong>:{PageInfo.hair_color}</p></div>
                        </div>
                        <div className="col-6">
                            <div className="row"><p><strong className="text-danger opacity-50">Skin-Color</strong>:{PageInfo.skin_color}</p></div>
                            <div className="row"><p><strong className="text-danger opacity-50">Eye-color</strong>:{PageInfo.eye_color}</p></div>
                            <div className="row"><p><strong className="text-danger opacity-50">Birth-Year</strong>:{PageInfo.birth_year}</p></div>
                            <div className="row"><p><strong className="text-danger opacity-50">Gender</strong>:{PageInfo.gender}</p></div>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <button  onClick={()=> navigate("/")} className="btn btn-primary">Back to Home</button>
                        </div>
                    </div>

                </div> : <p>Cargando...</p>
            }
        </div>
    )
}


export default InfoPageRodrigo