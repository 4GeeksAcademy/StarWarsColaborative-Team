import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaHeart } from "react-icons/fa";

const Planetas = () => {
  const { store } = useContext(Context);
  const planetas = store.planets;

  const stylePadre = {
    width: "100%",
    overflowX: "scroll",
    overscrollBehaviorX: "contain",
    scrollSnapType: "x proximity",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div style={stylePadre}>
      {planetas.map((planet) => (
        <div
          className="card mx-3"
          style={{ width: "400px", minWidth: "300px", display: "inline-block" }}
          key={planet.uid}
        >
          <div
            className="bg-secondary d-flex flex-row justify-content-center align-items-center"
            style={{ width: "100%", height: "200px" }}
          >
            <p
              style={{ fontWeight: "bold", fontSize: "25px" }}
              className="text-light"
            >
              400x200
            </p>
          </div>
          <div
            className="card-body d-flex flex-column"
            style={{ minHeight: "200px" }}
          >
            <div className="flex-grow-1">
              <h5 className="card-title">{planet.name}</h5>
              <p className="card-text p-0 m-1 col-12">
                Population: {planet.properties.population}
              </p>
              <p className="card-text p-0 m-1 col-12">
                Terrain: {planet.properties.terrain}
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between mt-auto">
              <Link
                to={"/infoPageJuan/"+ planet.uid}
                className="btn btn-outline-primary"
              >
                Learn More
              </Link>
              <button className="btn btn-outline-warning ml-auto">
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planetas;
