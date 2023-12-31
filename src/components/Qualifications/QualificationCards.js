import React from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const QualificationCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" , textAlign: "left"}}>Educational Qualifications</Card.Title>
        <ListGroup variant="flush" style={{ alignItems: "flex-start" }}>
          {props.qualifications.map(item => {
            return (
              <ListGroup.Item>
                <Card.Text className="purple" style={{ textAlign: "left" }}>{item.name}</Card.Text>
                <Card.Text  style={{ textAlign: "left" }}>{item.period}</Card.Text>
                <Card.Text  style={{ textAlign: "left" }}>{item.country_institute}</Card.Text>
              </ListGroup.Item>

            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
export default QualificationCards;
