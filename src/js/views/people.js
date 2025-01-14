import React, { useContext } from "react";
import GridSection from "../component/gridSection";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const People = () => {
    const { store, actions } = useContext(Context);

    if (!store.listOfPeople || store.listOfPeople.length === 0) {
        return <h2>Loading People...</h2>;
    }

    return (
        <div className="home-container">
            <GridSection 
    data={store.listOfPeople} 
    title="People" 
    section="people" 
/>
        </div>
    );
};

export default People;