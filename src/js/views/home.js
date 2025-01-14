import React, { useContext } from "react";
import GridHome from "../component/gridHome";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
    const { store } = useContext(Context);

    const sections = [
        {
            title: "Planets",
            description: "Explore the vast planets of the galaxy.",
            img: store.images.planets, // Corregido para obtener la imagen desde el store
            link: "/planets"
        },
        {
            title: "People",
            description: "Meet the characters of Star Wars.",
            img: store.images.people, // Corregido para obtener la imagen desde el store
            link: "/people"
        },
        {
            title: "Vehicles",
            description: "Discover the vehicles of Star Wars.",
            img: store.images.vehicles, // Corregido para obtener la imagen desde el store
            link: "/vehicles"
        }
    ];

    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Star Wars Blog</h1>
            <GridHome sections={sections} />
        </div>
    );
};
