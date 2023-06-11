import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { PROJECTS } from "../../Constants";
import QualificationCards from "./QualificationCards";

const Qualification = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Educational & Professional </strong>Qualifications
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={6} className="project-card" key={index}>
              <QualificationCards
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Qualification;
