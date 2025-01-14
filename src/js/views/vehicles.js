import React, { useContext } from "react";
import GridSection from "../component/gridSection";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Vehicles = () => {
    const { store, actions } = useContext(Context);

    if (!store.listOfVehicles || store.listOfVehicles.length === 0) {
        return <h2>Loading Vehicles...</h2>;
    }

    return (
        <div className="home-container">
            <GridSection 
    data={store.listOfVehicles} 
    title="Vehicles" 
    section="vehicles" 
/>
        </div>
    );
};

export default Vehicles;