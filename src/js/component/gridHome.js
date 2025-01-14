import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const GridHome = ({ sections }) => {
    return (
        <div className="grid-container">
            <Row xs={1} md={3} className="g-4">
                {sections.map((section, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={section.img} />
                            <Card.Body>
                                <Card.Title>{section.title}</Card.Title>
                                <Card.Text>{section.description}</Card.Text>
                                <Link to={section.link} className="btn btn-warning">
                                    Explore {section.title}
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default GridHome;
