import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import  Planets  from "./views/planets";
import PlanetDetails from "./views/planetsDetails";
import  People  from "./views/people";   
import PeopleDetails from "./views/peopleDetails";
 
import  Vehicles  from "./views/vehicles";
import injectContext from "./store/appContext";

import  CustomNavbar  from "./component/navbar";

import VehicleDetails from "./views/vehiclesDetails";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<CustomNavbar />
					<Routes>
						<Route path="/" element={<Home />} />

						<Route path="/planets" element={<Planets />} />
						<Route path="/planets/:planetId" element={<PlanetDetails />} />

						<Route path="/people" element={<People />} />
						<Route path= "people/:peopleId" element={<PeopleDetails/>} />

						
						<Route path="/vehicles" element={<Vehicles />} />
						<Route path= "vehicles/:vehicleId" element={<VehicleDetails/>} />
						

						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
