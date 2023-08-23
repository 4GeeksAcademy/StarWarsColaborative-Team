import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaHeart } from "react-icons/fa";

const Planetas = () => {
  const { store, actions } = useContext(Context);
  const planetas = store.planets;
  const {guardarFavoritos} = actions
  const navigate = useNavigate();
  const ShowInfo = (uid) => {
    console.log("Showinfo recibe " + uid);
    navigate(`/infoPageJuan/${uid}`);
  };

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
    <div className="row py-5">
      <h1 className="text-danger">Planets</h1>
      <div style={stylePadre}>
        {planetas.map((planet) => (
          <div
            className="card mx-3"
            style={{
              width: "400px",
              minWidth: "300px",
              display: "inline-block",
            }}
            key={planet.uid}
          >
            <img
              className="w-100 h-300px"
              src={
                planet.uid == 1
                  ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev18o2-7a23f26b-cd6d-4dee-83da-2eafe12c465e.jpg/v1/fill/w_894,h_894,q_70,strp/tatooine_star_wars_planet_collection_by_ericwhitted_dev18o2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MThvMi03YTIzZjI2Yi1jZDZkLTRkZWUtODNkYS0yZWFmZTEyYzQ2NWUuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z41Tsx74iElwppUJxze7ViuNOj7RMduFscr7HCpG21U"
                  : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`
              }
            />
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
                <a
                  onClick={() => ShowInfo(planet.uid)}
                  className="btn btn-outline-primary"
                >
                  Learn More
                </a>
                <button  onClick={()=>guardarFavoritos(planet.name)} className="btn btn-outline-warning ml-auto">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planetas;
