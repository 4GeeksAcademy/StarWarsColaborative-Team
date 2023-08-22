import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import {MdDelete} from "react-icons/md"

export const Navbar = () => {
	const {store,actions} = useContext(Context)
	const { favoritos } = store
	const {BorrarFavorito } = actions

	const navigate = useNavigate()
	return (
		<nav className="navbar navbar-light bg-light mb-3 mx-3">
			<Link to="/">
				<img width="60" height="60" src="https://img.icons8.com/ios/100/star-wars.png" alt="star-wars"/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown" >
					<button className="btn btn-primary dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos <span class="badge bg-secondary">{favoritos.length}</span>
					</button>
					<div className="dropdown-menu dropdown-menu-end row p-2 " style={{width:"250px"}}>
						<h3>Favoritos</h3>
						{
							favoritos[0]? favoritos.map((item)=>{
								return <p className="d-flex flex-row justify-content-between align-content-center">{item} <button onClick={()=> BorrarFavorito(item)} className="bg-transparent border-0"> <MdDelete/></button></p>
							}) : <p className="text-dark">No hay Favoritos</p>
						}

					</div>
				</div>
			</div>
		</nav>
	);
};

