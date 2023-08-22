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
			let existElement = false
			getStore().favoritos.map((element)=>{
				if(NameFav === element) {
					return existElement = true
				}
			})

			if(existElement === false) {
				setStore({...getStore(),favoritos:[...getStore().favoritos,NameFav]})
			}

















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

		getIdfromUrl: itemUrl => { // RECIBE UNA URL ej. https://swapi.dev/api/vehicles/4/ y le saca el numero 👹 
			const urlParts = itemUrl.split('/') // separa la string que llega por los / que tenga y devuelve un array de stringsssss ✨
			return urlParts[urlParts.length - 2] // VAMO LOS PIBEEE FUNCIONAAAAA 👹
		  },
	
		obtenerVehiculos: async () => {
			try {
			  const response = await fetch("https://swapi.dev/api/vehicles/")
			  const data = await response.json()
	
			  const vehiculosConId = await Promise.all(
				data.results.map(async item => { return {...item, id: await getActions().getIdfromUrl(item.url) }
				})
			  )
			  setStore({ vehicles: vehiculosConId });
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
		},
		BorrarFavorito:(elements)=> {
			const Favs = getStore().favoritos

			const newArr = Favs.filter((item)=> {
				return item!== elements
			})

			setStore({...getStore(),favoritos:newArr})
		}

		}
	}
}

export default getState
