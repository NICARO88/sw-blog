import React, { useContext } from "react";
import GridSection from "../component/gridSection";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Planets = () => {
    const { store, actions } = useContext(Context);

    if (!store.listOfPlanets || store.listOfPlanets.length === 0) {
        return <h2>Loading Planets...</h2>;
    }

    return (
        <div className="home-container">
            <GridSection 
    data={store.listOfPlanets} 
    title="Planets" 
    section="planets" 
/>
        </div>
    );
};

export default Planets;
