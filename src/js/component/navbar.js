import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { MdDelete } from "react-icons/md"

import LoginButton from "./loginButton";
import SignupButton from "./signupButton";

export const Navbar = () => {
	const { store, actions } = useContext(Context)


	const { favoritos } = store
	const { BorrarFavorito } = actions

	const navigate = useNavigate()
	const [token, setToken] = useState(null); // TODO necesito desaparecer los botones

	useEffect(() => {
		const token = localStorage.getItem("token");
		setToken(token);
	}, []);

	return (
		<nav className="navbar navbar-light bg-light py-0 px-5 bg-dark">
			<Link to="/">
				<img width="60" height="60" src="https://img.icons8.com/color/96/000000/star-wars.png" alt="star-wars" />
			</Link>

			<div className="ml-auto d-flex">
				
			{!token && (
				<div className="ml-auto d-flex">
				<LoginButton />
				<SignupButton />
				</div>
			)}

				<div className="dropdown" >
					<button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favoritos <span class="badge bg-dark">{favoritos.length}</span>
					</button>
					<div className="dropdown-menu dropdown-menu-end row p-2 " style={{ width: "250px" }}>
						<h3>Favoritos</h3>
						{
							favoritos[0] ? favoritos.map((item) => {
								return <p className="d-flex flex-row justify-content-between align-content-center">{item} <button onClick={() => BorrarFavorito(item)} className="bg-transparent border-0"> <MdDelete /></button></p>
							}) : <p className="text-dark">No hay Favoritos</p>
						}

					</div>
				</div>
			</div>


		</nav>
	);
};

