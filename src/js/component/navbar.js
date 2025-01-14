import React, { useContext, useState } from "react";
import { Navbar, Nav, Dropdown, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

const CustomNavbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false); // Controla la visibilidad del dropdown

    const toggleDropdown = (isOpen) => setShowDropdown(isOpen);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="px-3">
            <Navbar.Brand href="/">
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" 
                    alt="Star Wars Logo" 
                    style={{ width: "100px" }} 
                />
            </Navbar.Brand>
            <Nav className="ms-auto">
                <Dropdown align="end" show={showDropdown} onToggle={toggleDropdown}>
                    <Dropdown.Toggle variant="success" id="dropdown-favorites" onClick={() => setShowDropdown(true)}>
                        Favorites <Badge bg="light" text="dark">{store.favorites.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {store.favorites.length > 0 ? (
                            store.favorites.map((fav, index) => (
                                <Dropdown.Item
                                key={fav.uid}
                                onClick={() => {
                                    const [section, rawUid] = fav.uid.split("-"); // Divide el UID en sección y valor real
                                    navigate(`/${section}/${rawUid}`); // Navega al detalle con el UID real
                                }}
                            >
                                {fav.name}
                                <Button
                                    variant="danger"
                                    size="sm"
                                    className="ms-2"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        actions.removeFavorite(fav.uid);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </Dropdown.Item>
                            
                            ))
                        ) : (
                            <Dropdown.Item className="text-center">(empty)</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    );
};

export default CustomNavbar;

