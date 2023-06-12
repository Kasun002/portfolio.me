import React from "react";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const WorkCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold", textAlign: "left" }}>Work Experience</Card.Title>
        <ListGroup variant="flush" style={{ alignItems: "flex-start" }}>
          {props.qualifications.map(item => {
            return (
              <ListGroup.Item>
                <Card.Text className="purple" style={{ textAlign: "left" }}>{item.role} - {item.companyName}</Card.Text>
                <Card.Text style={{ textAlign: "left" }}>{item.period}</Card.Text>
                <Card.Text style={{ textAlign: "left" }}>{item.location}</Card.Text>
              </ListGroup.Item>

            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
export default WorkCards;
