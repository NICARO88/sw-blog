import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../styles/Details.css";

const PlanetDetails = () => {
    const { planetId } = useParams();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [planetDetails, setPlanetDetails] = useState(null);

    useEffect(() => {
        const loadPlanetDetails = async () => {
            const details = await actions.getDetails(`https://www.swapi.tech/api/planets/${planetId}`);
            setPlanetDetails(details);
        };
        loadPlanetDetails();
    }, [planetId, actions]);

    if (!planetDetails) {
        return <h2 className="text-center mt-5">Loading Planet Details...</h2>;
    }

    return (
        <div className="details-container">
            <Card className="text-center details-card">
                <Card.Header className="details-header">
                    <h2>{planetDetails.name}</h2>
                </Card.Header>
                <Row className="details-row">
                    <Col md={6}>
                        <Card.Img
                            variant="top"
                            src={store.images.planets || "https://via.placeholder.com/150"}
                            alt={`${planetDetails.name} image`}
                            className="details-img"
                        />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Text className="text-left details-description">
                                <strong>Description:</strong> A beautiful planet in the Star Wars galaxy with unique
                                features and characteristics.
                            </Card.Text>
                            <hr />
                            <Row>
                                <Col xs={6}>
                                    <strong>Climate:</strong>
                                    <p>{planetDetails.climate}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Terrain:</strong>
                                    <p>{planetDetails.terrain}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Diameter:</strong>
                                    <p>{planetDetails.diameter} km</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Population:</strong>
                                    <p>{planetDetails.population}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Gravity:</strong>
                                    <p>{planetDetails.gravity}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Orbital Period:</strong>
                                    <p>{planetDetails.orbital_period} days</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Rotation Period:</strong>
                                    <p>{planetDetails.rotation_period} hours</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Surface Water:</strong>
                                    <p>{planetDetails.surface_water}%</p>
                                </Col>
                            </Row>
                            <hr />
                            <Button variant="warning" onClick={() => navigate('/planets')}>
                                Back to Planets
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default PlanetDetails;

