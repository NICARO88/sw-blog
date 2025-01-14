const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			listOfPeople: [],
            listOfPlanets: [],
            listOfVehicles: [],
            selectedDetail: null,
            images: {
                people:"https://lacuevadelguampa.com/cdn/shop/articles/star_wars_personajes.jpg?v=1616087475&width=2000",
                planets:"https://assets-prd.ignimgs.com/2022/02/10/06-dantooine-1644525955609.jpg", 
                vehicles:"https://img.redbull.com/images/c_limit,w_1500,h_1000/f_auto,q_auto/redbullcom/2015/12/17/1331765972884_2/los-vehiculos-star-wars-que-te-gustaria-ver-en-el-dakar"

            }
			},
		actions: {
			addFavorite: (item) => {
                const store = getStore(); 
                console.log("Current favorites:", store.favorites); // Ver favoritos actuales
            
                // Verifica si el elemento ya está en favoritos
                const isFavorite = store.favorites.some(fav => fav.uid === item.uid); 
                console.log("Is item already a favorite?", isFavorite);
            
                if (!isFavorite) {
                    // Agrega el favorito si no está duplicado
                    const updatedFavorites = [...store.favorites, item];
                    setStore({ favorites: updatedFavorites });
                    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Persistir en localStorage
            
                    console.log("Updated favorites:", updatedFavorites); // Ver favoritos después de agregar
                }
            },
            

			removeFavorite: (uid) => {
				const store = getStore ();
				const updatedFavorites = store.favorites.filter (fav => fav.uid !== uid);
				setStore ({ favorites : updatedFavorites}); 
				localStorage.setItem("favorites", JSON.stringify (updatedFavorites));
			},

			loadFavoritesFromStorage: () => {
				const storedFavorites = JSON.parse (localStorage.getItem("favorites")) || [];
				setStore ({favorites : storedFavorites});
			},

			loadPeople: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/people");
                    const data = await response.json();
                    setStore({ listOfPeople: data.results });
                } catch (error) {
                    console.error("Error loading people:", error);
                }
            },
            loadPlanets: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/planets");
                    const data = await response.json();
                    setStore({ listOfPlanets: data.results });
                } catch (error) {
                    console.error("Error loading planets:", error);
                }
            },
            loadVehicles: async () => {
                try {
                    const response = await fetch("https://www.swapi.tech/api/vehicles");
                    const data = await response.json();
                    setStore({ listOfVehicles: data.results });
                } catch (error) {
                    console.error("Error loading vehicles:", error);
                }
            },
            
            getDetails: async (url) => {
                try {
                    const response = await fetch(url);
                    if (!response.ok) throw new Error("Failed to fetch details");
                    const data = await response.json();
                    return data.result.properties; // Regresamos solo las propiedades del detalle
                } catch (error) {
                    console.error("Error fetching details:", error);
                    return null;
                }
            },
            
            handleDetail: async (item) => {
                const data = await getActions().getDetails(item.url); // Fetch a la URL del detalle
                if (data) {
                    setStore({ selectedDetail: data }); // Guardar el detalle en el store
                }
            },
		}
	};
};

export default getState;
