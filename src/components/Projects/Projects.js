import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import emotion from "../../Assets/Projects/emotion.png";
import blog from "../../Assets/Projects/blog.png";
import leaf from "../../Assets/Projects/leaf.png";
import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Financial AI Platform"
              description="Strategic enterprise platform built for MAS (via IBM) to accelerate AI adoption in the financial sector. Features a RAG chatbot, serverless AWS backend (Lambda, API Gateway, DynamoDB), React frontend with Micro Frontend architecture, and CI/CD pipelines. Reduced deployment time by ~60% and cut admin overhead by ~80% via Google Sheets API integration."
              // ghLink="https://github.com/Kasun002"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CBDC Platform"
              description="High-security Central Bank Digital Currency platform for the Monetary Authority of Singapore (MAS). Supports the full digital currency lifecycle — minting, burning, and auditing — using ERC-20 smart contracts on Hyperledger Besu. Integrated Blockscout for on-chain monitoring, achieving ~99% compliance in MAS security audits via RBAC and OpenID SSO."
              // ghLink="https://github.com/Kasun002"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Custom AI Knowledge Base"
              description="R&D side project building a private, document-based AI intelligence platform. Implemented an Agentic pipeline using Ollama/Llama3, NestJS, and PostgreSQL (pgvector) for vector embeddings. Developed a custom ML scoring system using embedding similarity thresholds, achieving ~65% accuracy in validating LLM outputs for reliable document Q&A."
              // ghLink="https://github.com/Kasun002"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Public Service Discovery Platform"
              description="Singapore government web platform (Govtech via Cognizant) helping the public discover services across the country. Built with React and NestJS on AWS Serverless architecture supporting 100K+ monthly users with ~99% uptime. Optimized Lambda APIs and CloudFront CDN, achieving a ~25% reduction in page load times."
              // ghLink="https://github.com/Kasun002"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="TAFI – Tax Planning App"
              description="Cloud-native tax planning and lodgment application for individual income taxpayers in Australia. The ecosystem consists of three portals: Admin, Tax Practice, and Client. Built with React JS, Node.js/Express, MongoDB, and Redis with NX monorepo architecture. Led a team of 3 junior engineers as Associate Tech Lead at BISTEC Global Services."
              // ghLink="https://github.com/Kasun002"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="UPay – Digital Payment Ecosystem"
              description="Award-winning digital payments ecosystem in Sri Lanka (SDB Bank) providing retail payment solutions including utility bill settlements, instant mobile reloads, and online banking. Engineered hybrid mobile app components using Angular and Cordova, developed native Android/iOS plugins to bridge the digital wallet with the JUST PAY switch, and built backend logic with Node.js and Firebase."
              // ghLink="https://github.com/Kasun002"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
