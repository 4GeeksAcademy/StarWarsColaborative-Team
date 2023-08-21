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


			try {
				const response = await fetch(`https://swapi.dev/api/vehicles/`)
				const data = await response.json()
				setStore({vehicles: data.results })
				console.log("data Vehiculos: ", data.results)
			} catch (error) {
				console.log(error)
			}

















		},
		// EMPIEZA DESDE >> 111 a 140  PLANETS >>> JUAN
		obtenerPlanetas: async () => {



























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
