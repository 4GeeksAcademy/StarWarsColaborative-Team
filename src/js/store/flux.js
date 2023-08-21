import { object } from "prop-types"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			// EMPIEZA DESDE >> vehicles: [{...},{...},{...},{...}]
			favoritos: [],
			peoples: [],
			vehicles: [],
			planets: [],
			films: [],
			starships: []

		},
		actions: {




		// EMPIEZA DESDE >> 21 a 50  FAVORITOS >>> RODRI
		guardarFavoritos: async () => {
			


























		},
		// EMPIEZA DESDE >> 51 a 80  PEOPLE >>> RODRI
		obtenerPersonas: async () => {



























		},
		// EMPIEZA DESDE >> 81 a 110  VEHICLES >>> MATIAS
		obtenerVehiculos: async () => {



























		},
		// EMPIEZA DESDE >> 111 a 140  PLANETS >>> JUAN
		obtenerPlanetas: async () => {
			const url = 'https://www.swapi.tech/api/planets';
			try {
			  const response = await fetch(url);
			  const data = await response.json();
		  
			  const planetsWithDetails = await Promise.all(
				data.results.map(async (planet) => {
				  const detailResponse = await fetch(planet.url);
				  const detailData = await detailResponse.json();
				  return {
					...planet,
					properties: detailData.result.properties 
				  };
				})
			  );
			  setStore({ planets: planetsWithDetails });
			} catch (error) {
			  console.error('Ocurrió un error:', error);
			}
		  },
		  
		  





		  
		// EMPIEZA DESDE >> 141 a 170  FILMS >>> KAROL
		obtenerPeliculas: async () => {
			



























		},
		// EMPIEZA DESDE >> 171 a 200  STARSHIPS >>> YOSELIN
		obtenerNaves: async () => {


























			
			},
		}
	}
}

export default getState
