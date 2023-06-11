import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <Card.Text className="purple">Technology: {props.technologyUsed}</Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text className="purple" style={{ textAlign: "left" }}>Responsibilities:</Card.Text>
        <ListGroup variant="flush" style={{ alignItems: "flex-start" }}>
          {props.responsibilities.map(item => {
            return (<>
              <ListGroup.Item>{item}</ListGroup.Item>
            </>
            );
          })}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
