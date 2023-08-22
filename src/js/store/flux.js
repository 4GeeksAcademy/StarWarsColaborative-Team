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



























		},
		// EMPIEZA DESDE >> 141 a 170  FILMS >>> KAROL
		obtenerPeliculas: async () => {



























		},
		// EMPIEZA DESDE >> 171 a 200  STARSHIPS >>> YOSELIN
		obtenerNaves: async () => {
			try {
				const resp = await fetch("https://swapi.dev/api/starships");
				const data = await resp.json();
				const store = getStore();
				if (data) {
					data.results.map((item, index) => {
						const uid = index + 1;
						return setStore({ ...store, starships: [...store.starships, { ...item, uid: uid }] });
					});
				}
				console.log(store);
			} catch (error) {
				console.error("Error al obtener las naves:", error);
			}
		},

		TraerInfo: async (uid, tipo) => {
			console.log(`Estas buscando la api aca https://swapi.dev/api/${tipo}/${uid}`);
			try {
				const resp = await fetch(`https://swapi.dev/api/${tipo}/${uid}`);
				const data = await resp.json();
				console.log(data);
				setStore({ ...getStore(), PageInfo: data });
			} catch (error) {
				console.log(error);
			}
	




























			
			},
		}
	}
}

export default getState
