import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const InfoPageJuan = () => {
    const { planetUid } = useParams();
    const { store } = useContext(Context); 

    const planet = store.planets.find(p => p.uid === planetUid);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center p-4">
          <div
            className="bg-secondary d-flex flex-row justify-content-center align-items-center"
            style={{ width: "600px", height: "400px" }}
          >
            <p
              style={{ fontWeight: "bold", fontSize: "25px" }}
              className="text-light"
            >
              600x400
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="text-center">
            <h1>{planet.name}</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              libero nulla, viverra vitae molestie sed, faucibus in ipsum.
              Suspendisse ornare risus libero, et laoreet lacus imperdiet at.
              Nunc vestibulum mattis magna, sed pulvinar tellus malesuada sed.
              Nunc in quam at est dignissim rutrum id in nibh. Etiam quis
              placerat elit. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
      <hr className="thick-separator text-danger border-4" />
      <div className="row">
        <div className="col">
          <ul className="list-unstyled d-flex flex-wrap">
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Name</strong>
              </p>
              <p>{planet.name}</p>
            </li>
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Diameter</strong>
              </p>
              <p>{planet.properties.diameter} km</p>
            </li>
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Rotation period</strong>
              </p>
              <p>{planet.properties.rotation_period} days</p>
            </li>
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Orbital period</strong>
              </p>
              <p>{planet.properties.orbital_period} days</p>
            </li>
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Gravity</strong>
              </p>
              <p>{planet.properties.gravity}</p>
            </li>
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Population</strong>
              </p>
              <p>{planet.properties.population}</p>
            </li>
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Climate</strong>
              </p>
              <p>{planet.properties.climate}</p>
            </li>
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Terrain</strong>
              </p>
              <p>{planet.properties.terrain}</p>
            </li>
            <li className="text-danger mb-2 mr-4 col">
              <p>
                <strong>Surface Water</strong>
              </p>
              <p>{planet.properties.surface_water === "1" ? "No" : "Yes"}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfoPageJuan;
