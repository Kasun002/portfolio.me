import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { EDUCATION, WORK } from "../../Constants";
import QualificationCards from "./QualificationCards";
import WorkCards from "./WorkCards";

const Qualification = () => {
  return (
    <Container fluid className="project-section">
      {/* <Container> */}
        <h1 className="project-heading">
          My <strong className="purple">Educational </strong>Qualifications & <strong className="purple">Work</strong> Experience
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         
            <Col md={6} className="project-card" >
              <QualificationCards
                qualifications={EDUCATION}
              />
            </Col>
            <Col md={6} className="project-card" >
              <WorkCards
                qualifications={WORK}
              />
            </Col>
        </Row>
      {/* </Container> */}
    </Container>
  );
}

export default Qualification;
