import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";


const GridSection = ({ data, title, section }) => {
    const { actions, store } = useContext(Context);
    const isFavorite = (uid) => {
        return store.favorites.some((fav) => fav.uid === `${section}-${uid}`);
    };
    const navigate = useNavigate();

    return (
        <div className="grid-container">
            <h1 className="home-title">{title}</h1>
            <Row xs={1} md={2} lg={5} className="g-4">
                {data.map((item) => (
                    <Col key={`${section}-${item.uid}`}>
                        <Card>
                            <Card.Img 
                                variant="top" 
                                src={store.images[section] || "https://via.placeholder.com/150"} 

                            />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Button  
                                    onClick={async () => {
                                        navigate(`/${section}/${item.uid}`);
                                        const details = await actions.getDetails(item.url);
                                        console.log("Details for:", details);
                                    }}
                                    className="me-3 btn-warning">
                                    Details
                                </Button>

                                <Button  
                                    onClick={(e) => {
                                        e.stopPropagation(); // Asegura que no cierre el dropdown
                                        console.log("Adding to favorites:", item.uid);
                                        actions.addFavorite({ ...item, uid: `${section}-${item.uid}` }); // Actualiza los favoritos
                                    }} 
                                    className={isFavorite(item.uid) ? "btn-success" : "btn-danger"}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};



export default GridSection;
