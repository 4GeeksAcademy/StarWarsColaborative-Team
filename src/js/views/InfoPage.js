import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const InfoPage = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const navigate = useNavigate()
	return (
		<div className="">
			Aqui es donde hay que trabajar



			<button className="btn btn-primary" onClick={()=> navigate("/")}>Ir al Home</button>
		</div>
	);
};

InfoPage.propTypes = {
	match: PropTypes.object
};
