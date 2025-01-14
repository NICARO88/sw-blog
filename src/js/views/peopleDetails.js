import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../../styles/Details.css";

const PeopleDetails = () => {
    const { peopleId } = useParams();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [peopleDetails, setPeopleDetails] = useState(null);

    useEffect(() => {
        const loadPeopleDetails = async () => {
            const details = await actions.getDetails(`https://www.swapi.tech/api/people/${peopleId}`);
            setPeopleDetails(details);
        };
        loadPeopleDetails();
    }, [peopleId, actions]);

    if (!peopleDetails) {
        return <h2 className="text-center mt-5">Loading People Details...</h2>;
    }

    return (
        <div className="details-container">
            <Card className="text-center details-card">
                <Card.Header className="details-header">
                    <h2>{peopleDetails.name}</h2>
                </Card.Header>
                <Row className="details-row">
                    <Col md={6}>
                        <Card.Img
                            variant="top"
                            src={store.images.people || "https://via.placeholder.com/150"}
                            alt={`${peopleDetails.name} image`}
                            className="details-img"
                        />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Text className="text-left details-description">
                                <strong>Description:</strong> A captivating individual from the Star Wars galaxy, 
                                whose story intertwines with the epic battles, alliances, and mysteries of a universe far, far away. 
                                Known for their unique traits, contributions, and adventures, this character leaves an indelible mark on the saga.
                            </Card.Text>
                            <hr />
                            <Row>
                                <Col xs={6}>
                                    <strong>Brith year:</strong>
                                    <p>{peopleDetails.birth_year}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Eye color:</strong>
                                    <p>{peopleDetails.eye_color}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Gender:</strong>
                                    <p>{peopleDetails.gender}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Hair color:</strong>
                                    <p>{peopleDetails.hair_color}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Height:</strong>
                                    <p>{peopleDetails.height}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Mass:</strong>
                                    <p>{peopleDetails.mass}</p>
                                </Col>
                                <Col xs={6}>
                                    <strong>Skin color:</strong>
                                    <p>{peopleDetails.skin_color}</p>
                                </Col>
                            </Row>
                            <hr />
                            <Button variant="warning" onClick={() => navigate('/people')}>
                                Back to People
                            </Button>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default PeopleDetails;