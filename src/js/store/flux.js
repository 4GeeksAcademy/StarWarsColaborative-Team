import { object } from "prop-types"

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			// vehicles: [{...},{...},{...},{...}]
			favoritos: [],
			peoples: [],
			vehicles: [],
			planets: []


		},
		actions: {

			// const updatedData = data.map(item => ({	...item, info: 'datos de una api' }))

			individualFetch: async (url) =>{
				try {
					const response = await fetch(url)
					const data = await response.json()	
					console.log("esto en individual fetch: ",data)
					return data.result.properties // VAMO LOS PIBEEE
				} catch (error) {
					console.log(error)
				}
			},

			obtenerUrls: async (objList) =>{
			// {uid: '1', name: 'Luke Skywalker', url: 'https://www.swapi.tech/api/people/1'}
				// tiene que ser un mapeo del objeto >>> agregando el otro objeto desempaquetado fetch >> url <<
				console.log("EN obtenerUrls >> mostramos objList antes del mapeo: ", objList)

				// ORIGINAL FALLA tira una promise
				// const nuevaLista = objList.map(
				// 	// una funcion que retorne
				// 	item => ({ ...item, info: getActions().individualFetch(item.url) })
				// )

				const nuevaLista = await Promise.all(
					objList.map(async item => {
					  const info = await getActions().individualFetch(item.url);  
					  return {...item, info};
					})
				  );


				// OPCION IA, tira promise por todos lados
				// const nuevaLista = objList.map(async item => {
				// 	const info = await getActions().individualFetch(item.url);
				// 	return {...item, info}; 
				//   });


				// try {
				// 	const response = await fetch(objList.url)
				// 	const data = await response.json()					
				// 	newobjlist= objList.map(item => ({...item, info: data.results}))
				// 	console.log("estoy en la funcion map de flux: ", newobjlist)
				// } catch (error) {
				// 	console.log(error)
				// }

				console.log("EN obtenerUrls >> mostramos nuevaLista: ", nuevaLista)
				return nuevaLista
				
			},


			obtenerFavoritos: async (favoritos) => {

			},

			obtenerPeople: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/`)
					const data = await response.json()
					// funcion
					//getActions().obtenerUrls(data.results) // enviamos la lista de objetos para mapear en las funciones (obtenerUrls y individualFetch)
					setStore({peoples: getActions().obtenerUrls(data.results) })
					//setStore({ peoples: data.results })
					console.log("data People: ", data.results)
					//getActions().obtenerUrls(data.results)
				} catch (error) {
					console.log(error)
				}

				//console.log("TESTTTT: ",getActions().obtenerUrls(getStore().peoples))
			},

			obtenerVehiculos: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/`)
					const data = await response.json()
					setStore({ vehicles: data.results })
					console.log("data Vehiculos: ", data.results)
				} catch (error) {
					console.log(error)
				}
			},

			obtenerPlanetas: async () => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/`)
					const data = await response.json()
					setStore({ planets: data.results })
					console.log("data Planetas: ", data.results)

				} catch (error) {
					console.log(error)
				}
			},




			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green")
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore()

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color
					return elm
				})

				//reset the global store
				setStore({ demo: demo })
			}
		}
	}
}

export default getState
