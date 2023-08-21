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
			starships: [],
			PageInfo:undefined
		},
		actions: {




		// EMPIEZA DESDE >> 21 a 50  FAVORITOS >>> RODRI
		guardarFavoritos: async (NameFav) => {
			setStore({...getStore(),favoritos:[...getStore().favoritos,NameFav]})


























		},
		// EMPIEZA DESDE >> 51 a 80  PEOPLE >>> RODRI
		obtenerPersonas: async () => {
			console.log("xd")
			try {
				const resp = await fetch("https://swapi.dev/api/people")
				const data = await resp.json()
				const store = getStore()
				if(data) {
					data.results.map((item,index)=> {
						const uid = index + 1
						return setStore({...store,peoples:[...store.peoples,{...item,uid:uid}]})
					})
				}
				console.log(store)

			} catch (error) {
				
			}











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
		// EMPIEZA DESDE >> 201 a 200  Funcion que filtre datos en base a id >>> Rodrigo
		TraerInfoEspesifica:async(uid,tipo)=> {
			try {
				const resp = await fetch(`https://swapi.dev/api/${tipo}/${uid}`)
				const data = await resp.json()
				console.log(data)
				setStore({...getStore(),PageInfo:data})
				
			} catch (error) {
				console.log(error)
			}
		}

		}
	}
}

export default getState
