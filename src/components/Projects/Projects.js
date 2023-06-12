import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { PROJECTS } from "../../Constants";

const Projects = () => {
  return (
    <Container fluid className="project-section">
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          {PROJECTS.map((project, index) => (
            <Col md={6} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.image}
                technologyUsed={project.technologyUsed}
                isBlog={false}
                title={project.name}
                description={project.description}
                responsibilities={project.responsibilities}
                link={project.url}
              />
            </Col>
          ))}
        </Row>
    </Container>
  );
}

export default Projects;
