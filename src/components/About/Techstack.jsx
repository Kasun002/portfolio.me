import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNextdotjs,
  SiNestjs,
  SiAngular,
  SiDjango,
  SiFastapi,
  SiExpress,
  SiSpringboot,
  SiServerless,
  SiVuedotjs,
  SiAntdesign,
  SiMysql,
  SiAmazondynamodb,
  SiJenkins,
  SiGithubactions,
} from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kubernates from "../../Assets/TechIcons/Kubernates.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import MUI from "../../Assets/TechIcons/MUI.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";

const categoryLabel = {
  width: "100%",
  textAlign: "left",
  color: "#c770f0",
  fontSize: "0.75em",
  fontWeight: "600",
  letterSpacing: "3px",
  textTransform: "uppercase",
  paddingBottom: "12px",
  paddingTop: "30px",
  borderBottom: "1px solid rgba(199, 112, 240, 0.25)",
  marginBottom: "20px",
};

function Techstack() {
  return (
    <div style={{ paddingBottom: "50px" }}>

      {/* Languages */}
      <Row>
        <Col xs={12}><div style={categoryLabel}>Languages</div></Col>
      </Row>
      <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Javascript} alt="javascript" />
          <div className="tech-icons-text">JavaScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Typescript} alt="typescript" />
          <div className="tech-icons-text">TypeScript</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Python} alt="Python" />
          <div className="tech-icons-text">Python</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Java} alt="Java" />
          <div className="tech-icons-text">Java</div>
        </Col>
      </Row>

      {/* Frontend */}
      <Row>
        <Col xs={12}><div style={categoryLabel}>Frontend</div></Col>
      </Row>
      <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={ReactIcon} alt="react" />
          <div className="tech-icons-text">React.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs fontSize={"24px"} />
          <div className="tech-icons-text">Next.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAngular fontSize={"24px"} />
          <div className="tech-icons-text">Angular</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVuedotjs fontSize={"24px"} />
          <div className="tech-icons-text">Vue.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Redux} alt="redux" />
          <div className="tech-icons-text">Redux</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Tailwind} alt="tailwind" />
          <div className="tech-icons-text">Tailwind CSS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={MUI} alt="mui" />
          <div className="tech-icons-text">Material UI</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAntdesign fontSize={"24px"} />
          <div className="tech-icons-text">Ant Design</div>
        </Col>
      </Row>

      {/* Backend & APIs */}
      <Row>
        <Col xs={12}><div style={categoryLabel}>Backend &amp; APIs</div></Col>
      </Row>
      <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Node} alt="node" />
          <div className="tech-icons-text">Node.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNestjs fontSize={"24px"} />
          <div className="tech-icons-text">NestJS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiExpress fontSize={"24px"} />
          <div className="tech-icons-text">Express.js</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFastapi fontSize={"24px"} />
          <div className="tech-icons-text">FastAPI</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiDjango fontSize={"24px"} />
          <div className="tech-icons-text">Django</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSpringboot fontSize={"24px"} />
          <div className="tech-icons-text">Spring Boot</div>
        </Col>
      </Row>

      {/* Cloud & DevOps */}
      <Row>
        <Col xs={12}><div style={categoryLabel}>Cloud &amp; DevOps</div></Col>
      </Row>
      <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={AWS} alt="AWS" className="tech-icon-images" />
          <div className="tech-icons-text">AWS</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiServerless fontSize={"24px"} />
          <div className="tech-icons-text">Serverless</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Docker} alt="docker" />
          <div className="tech-icons-text">Docker</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Kubernates} alt="kubernetes" />
          <div className="tech-icons-text">Kubernetes</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJenkins fontSize={"24px"} />
          <div className="tech-icons-text">Jenkins</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiGithubactions fontSize={"24px"} />
          <div className="tech-icons-text">GitHub Actions</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Git} alt="git" />
          <div className="tech-icons-text">Git</div>
        </Col>
      </Row>

      {/* Databases */}
      <Row>
        <Col xs={12}><div style={categoryLabel}>Databases</div></Col>
      </Row>
      <Row style={{ justifyContent: "flex-start", paddingBottom: "10px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <img src={SQL} alt="PostgreSQL" />
          <div className="tech-icons-text">PostgreSQL</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Mongo} alt="mongoDb" />
          <div className="tech-icons-text">MongoDB</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiMysql fontSize={"24px"} />
          <div className="tech-icons-text">MySQL</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAmazondynamodb fontSize={"24px"} />
          <div className="tech-icons-text">DynamoDB</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Redis} alt="redis" />
          <div className="tech-icons-text">Redis</div>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <img src={Firebase} alt="firebase" />
          <div className="tech-icons-text">Firebase</div>
        </Col>
      </Row>

    </div>
  );
}

export default Techstack;
