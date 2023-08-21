import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

const InfoPageJuan = () => {
  const { theid } = useParams();
  const { store, actions } = useContext(Context);
  const { TraerInfoEspesifica } = actions;
  const { PageInfo } = store;

  useEffect(() => {
    console.log("Mando al flux la id " + theid)
    TraerInfoEspesifica(theid, "planets");
  }, []);

  return (
    <div className="container">
      {PageInfo ? (
        <>
          {console.log(PageInfo)}
          <div className="row">
            <div className="col-md-6 d-flex align-items-center p-4">
            <img className="w-100 h-300px" src={theid == 1 ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev18o2-7a23f26b-cd6d-4dee-83da-2eafe12c465e.jpg/v1/fill/w_894,h_894,q_70,strp/tatooine_star_wars_planet_collection_by_ericwhitted_dev18o2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MThvMi03YTIzZjI2Yi1jZDZkLTRkZWUtODNkYS0yZWFmZTEyYzQ2NWUuanBnIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Z41Tsx74iElwppUJxze7ViuNOj7RMduFscr7HCpG21U" : `https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`} />
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="text-center">
                <h1>{PageInfo.name}</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  libero nulla, viverra vitae molestie sed, faucibus in ipsum.
                  Suspendisse ornare risus libero, et laoreet lacus imperdiet
                  at. Nunc vestibulum mattis magna, sed pulvinar tellus
                  malesuada sed. Nunc in quam at est dignissim rutrum id in
                  nibh. Etiam quis placerat elit. Aliquam erat volutpat.
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
                  <p>{PageInfo.name}</p>
                </li>
                <li className="text-danger mb-2 mr-4 col">
                  <p>
                    <strong>Diameter</strong>
                  </p>
                  <p>{PageInfo.diameter} km</p>
                </li>
                <li className="text-danger mb-2 mr-4 col">
                  <p>
                    <strong>Rotation period</strong>
                  </p>
                  <p>{PageInfo.rotation_period} days</p>
                </li>
                <li className="text-danger mb-2 mr-4 col">
                  <p>
                    <strong>Orbital period</strong>
                  </p>
                  <p>{PageInfo.orbital_period} days</p>
                </li>
                <li className="text-danger mb-2 mr-4 col">
                  <p>
                    <strong>Gravity</strong>
                  </p>
                  <p>{PageInfo.gravity}</p>
                </li>
                <li className="text-danger mb-2 mr-4 col">
                  <p>
                    <strong>Population</strong>
                  </p>
                  <p>{PageInfo.population}</p>
                </li>
                <li className="text-danger mb-2 mr-4 col">
                  <p>
                    <strong>Climate</strong>
                  </p>
                  <p>{PageInfo.climate}</p>
                </li>
                <li className="text-danger mb-2 mr-4 col">
                  <p>
                    <strong>Terrain</strong>
                  </p>
                  <p>{PageInfo.terrain}</p>
                </li>
                <li className="text-danger mb-2 mr-4 col">
                  <p>
                    <strong>Surface Water</strong>
                  </p>
                  <p>{PageInfo.surface_water === "1" ? "No" : "Yes"}</p>
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default InfoPageJuan;
