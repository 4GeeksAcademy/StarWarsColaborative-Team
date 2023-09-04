import { object } from "prop-types"
import axios from "axios"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			film: {},
			// EMPIEZA DESDE >> vehicles: [{...},{...},{...},{...}]
			favoritos: [],
			peoples: [],
			vehicles: [], // si recargo pagina pierdo por unos segundos hasta que se vuelva a llamar
			planets: [],
			films: [],
			starships: [],
			PageInfo: undefined,
			auth: false
			
		},
		actions: {




			// EMPIEZA DESDE >> 21 a 50  FAVORITOS >>> RODRI
			guardarFavoritos: async (NameFav) => {

				const token = localStorage.getItem('token');
				if(token === null) {
					//throw new Error('No autorizado');
					alert("Para favoritos tu tener, registrado estar debes")
				}
				else{
					let existElement = false
					getStore().favoritos.map((element) => {
						if (NameFav === element) {
							return existElement = true
						}
					})

					if (existElement === false) {
						setStore({ ...getStore(), favoritos: [...getStore().favoritos, NameFav] })
					}
				}
		







			},
			// EMPIEZA DESDE >> 51 a 80  PEOPLE >>> RODRI
			obtenerPersonas: async () => {
				try {
					const resp = await fetch("https://swapi.dev/api/people")
					const data = await resp.json()
					const store = getStore()
					if (data) {
						data.results.map((item, index) => {
							const uid = index + 1
							return setStore({ ...store, peoples: [...store.peoples, { ...item, uid: uid }] })
						})
					}
					console.log(store)

				} catch (error) {

				}












			},
			// EMPIEZA DESDE >> 81 a 110  VEHICLES >>> MATIAS

			getIdfromUrl: itemUrl => { // RECIBE UNA URL ej. https: // swapi.dev / api /vehicles / 4 / y le saca el numero 👹 
				const urlParts = itemUrl.split('/') // separa la string que llega por los / que tenga y devuelve un array de stringsssss ✨
				return urlParts[urlParts.length - 2]
			},

			obtenerVehiculos: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/vehicles/")
					const data = await response.json()
		
					const vehiculosConId = await Promise.all(
						data.results.map(async item => {
							return { ...item, id: await getActions().getIdfromUrl(item.url) }
						})
					)
					setStore({ vehicles: vehiculosConId });
				} catch (error) {
					console.log(error)
				}
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
				const url = 'https://swapi.dev/api/films';
				try {
					const response = await fetch(url);
					const data = await response.json();
					data.results.map((item, index) => {
						const id = index + 1
						return setStore({ ...getStore(), films: [...getStore().films, { ...item, id: id }] })
					})
				} catch (error) {
					console.error('Ocurrió un error:', error);
				}
			},

			obtenerPeliculaIndividual: async (id) => {
				const url = 'https://swapi.dev/api/films/';
				try {
					const response = await fetch(url + id);
					const data = await response.json();
					console.log(data)
					setStore({ film: data });
				} catch (error) {
					console.error('Ocurrió un error:', error);
				}

			},

			// EMPIEZA DESDE >> 171 a 200  STARSHIPS >>> YOSELIN
			obtenerNaves: async () => {

					























			},
			// EMPIEZA DESDE >> 201 a 200  Funcion que filtre datos en base a id >>> Rodrigo
			TraerInfoEspesifica: async (uid, tipo) => {
				//console.log(`Estas buscando la api aca https://swapi.dev/api/${tipo}/${uid}`)
				try {
					console.log(`Estas buscando la api aca https://swapi.dev/api/${tipo}/${uid}`)
					const resp = await fetch(`https://swapi.dev/api/${tipo}/${uid}`)
					const data = await resp.json()
					setStore({ ...getStore(), PageInfo: data })

				} catch (error) {
					console.log(error)
				}
			},

			// FAVORITOS
			BorrarFavorito: (elements) => {
				const Favs = getStore().favoritos

				const newArr = Favs.filter((item) => {
					return item !== elements
				})

				setStore({ ...getStore(), favoritos: newArr })
			},

			// LOGIN
			LoginUser: async (email,password) =>{
				console.log(" FLUX USER LOGIN: ", email, " >>>> ", password )
				// https://fuzzy-fiesta-749rg547pxpcpjjj-3000.app.github.dev/login
				//     {"email": "matias","password": "matias" }
				try {
					let data = await axios.post("https://fuzzy-fiesta-749rg547pxpcpjjj-3000.app.github.dev/login",  
								{"email": email,"password": password }
								)

					localStorage.setItem("token", data.data.access_token) // guardamos el token en el almacenamiento local
					console.log("LOGIN DATA: ", data.data.user.id)
					//setStore({infoUser:data.data.user.id}) // para favoritos
					setStore({auth:true})

				} catch (error) {
					console.log(error)
				}

			},

			validToken: async () =>{
				let token = localStorage.getItem("token");
				try {
					let data = await axios.get("https://fuzzy-fiesta-749rg547pxpcpjjj-3000.app.github.dev/valid-token", {
						headers: {'Authorization': 'Bearer ' + token}
					})					
					setStore({auth:true})

				} catch (error) {
					console.log(error)
					setStore({auth:false})
				}

			},

			// SIGNUP
			SignupUser: async (username, email,password, is_active) =>{
				console.log(" FLUX USER SIGNUP: ", email, " >>>> ", password )
				// https://fuzzy-fiesta-749rg547pxpcpjjj-3000.app.github.dev/signup <<<<
				// {"username" : "matias", "email" : "matias","password" : "matias", "is_active": true}
				try {
					let data = await axios.post("https://fuzzy-fiesta-749rg547pxpcpjjj-3000.app.github.dev/signup",  
								{
								"username": username,
								"email": email,
								"password": password,
								"is_active": is_active
								}
								
					)
					console.log(data)
					setStore({auth:true})

					//localStorage.setItem("token", data.data.access_token) // guardamos el token en el almacenamiento local
				} catch (error) {
					console.log(error)
					setStore({auth:false})
				}

			}

		},

	}
}

export default getState
