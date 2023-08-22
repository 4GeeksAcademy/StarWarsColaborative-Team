import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import {AiOutlineHeart} from "react-icons/ai"
import { Link } from "react-router-dom";

const Starships = () => {
    const stylePadre = {
        width: "100%",
        overflowX: "scroll",
        overscrollBehaviorX: "contain",
        scrollSnapType: "x proximity",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "row"
    };

    const { store, actions } = useContext(Context);
    const { guardarFavoritos } = actions;
    const { starships } = store;
    const navigate = useNavigate();

    const [starshipsData, setStarshipsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStarshipsData();
    }, []);

    const fetchStarshipsData = async () => {
        try {
            const response = await fetch("https://swapi.dev/api/starships/");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setStarshipsData(data.results);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching starships data:", error);
        }
    };

    const ShowInfo = (uid) => {
        navigate(`/infoPageYoselin/${uid}`);
    };

    return (
        <div className="row">
            <h1 className="titulo text-danger">StarShip</h1>
            <div className="col-12" style={stylePadre}>
                {loading ? (
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                ) : (
                    starshipsData.map((info) => (
                        <div
                            className="card mx-3"
                            style={{
                                width: "400px",
                                minWidth: "300px",
                                display: "inline-block"
                            }}
                            key={info.name}
                        >
                            <div
                                className="d-flex flex-row justify-content-center align-items-center"
                                style={{ width: "100%", height: "200px" }}
                            >
                               
                                <img
                                    src={`https://starwars-visualguide.com/assets/img/starships/${info.url.split("/").slice(-2, -1)}.jpg`}
                                    alt={`Image of ${info.name}`}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{info.name}</h5>
                                <p className="card-text p-0 m-1 col-12">
                                    Model: {info.model}
                                </p>
                                <p className="card-text p-0 m-1 col-12">
                                    Passengers: {info.passengers}
                                </p>
                                <div className="d-flex flex-row justify-content-between">
                                    <a
                                        onClick={() => ShowInfo(info.uid)}
                                        href="#"
                                        className="btn btn-outline-primary"
                                    >
                                        Learn More
                                    </a>
                                    <button
                                        onClick={() =>
                                            guardarFavoritos(info.name)
                                        }
                                        className="btn btn-outline-warning ml-auto"
                                    >
                                         <AiOutlineHeart  />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Starships;