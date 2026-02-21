import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Senior Full-Stack Software Engineer with{" "}
              <b className="purple">9+ years of experience</b> specializing in
              Frontend optimization, AI integration, and Cloud-Native AWS
              Architecture.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript (ES6+), TypeScript, Python, and Java{" "}
                </b>
              </i>
              — and I architect enterprise applications using{" "}
              <b className="purple">React</b> and{" "}
              <b className="purple">NestJS / FastAPI</b> microservices.
              <br />
              <br />
              My key interests include building
              <i>
                <b className="purple">
                  {" "}
                  AI-powered RAG Systems, Agentic Pipelines,{" "}
                </b>
              </i>
              and designing scalable{" "}
              <b className="purple">Serverless AWS architectures</b> with
              Lambda, API Gateway, and Infrastructure as Code.
              <br />
              <br />
              Currently working as a{" "}
              <b className="purple">Software Consultant at IBM</b>, deployed at
              the{" "}
              <i>
                <b className="purple">
                  Monetary Authority of Singapore (MAS)
                </b>
              </i>
              , leading full-stack development of a Financial AI Platform and
              CBDC platform.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
