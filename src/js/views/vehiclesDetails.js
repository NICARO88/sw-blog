import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../styles/Details.css";

const VehicleDetails = () => {
    const { vehicleId } = useParams();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [vehicleDetails, setVehicleDetails] = useState(null);

    useEffect(() => {
        const loadVehicleDetails = async () => {
            const details = await actions.getDetails(`https://www.swapi.tech/api/vehicles/${vehicleId}`);
            setVehicleDetails(details);
        };
        loadVehicleDetails();
    }, [vehicleId, actions]);

    if (!vehicleDetails) {
        return <h2 className="text-center mt-5">Loading Vehicle Details...</h2>;
    }

    return (
        <div className="details-container">
            <Card className="text-center details-card">
                <Card.Header className="details-header">
                    <h2>{vehicleDetails.name}</h2>
                </Card.Header>
                <Row className="details-row">
                    <Col md={6}>
                        <Card.Img
                            variant="top"
                            src={store.images.vehicles || "https://via.placeholder.com/150"}
                            alt={`${vehicleDetails.name} image`}
                            className="details-img"
                        />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Text className="text-left details-description">
                                <strong>Description:</strong>A remarkable vehicle from the Star Wars galaxy, 
                                known for its unique design and capabilities. Each vehicle has played a significant 
                                role in shaping the intergalactic conflicts and adventures, showcasing technological 
                                marvels and engineering brilliance.

                            </Card.Text>
                            <hr />
                            <Row>
                                <Col xs={6}>
                                    <strong>Cargo Capacity:</strong>
                                    <p>{vehicleDetails.cargo_capacity}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Consumables:</strong>
                                    <p>{vehicleDetails.consumables}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Cost in credits :</strong>
                                    <p>{vehicleDetails.cost_in_credits}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Crew:</strong>
                                    <p>{vehicleDetails.crew}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Length:</strong>
                                    <p>{vehicleDetails.length}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Manufacturer:</strong>
                                    <p>{vehicleDetails.manufacturer}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Max atmosphering speed:</strong>
                                    <p>{vehicleDetails.max_atmosphering_speed}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Model:</strong>
                                    <p>{vehicleDetails.model}</p>
                                </Col>
                            </Row>
                            <hr />
                            <Button variant="warning" onClick={() => navigate('/vehicles')}>
                                Back to Vehicles
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default VehicleDetails;