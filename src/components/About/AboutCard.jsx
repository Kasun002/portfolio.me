import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Kasun Abaywardana</span>{" "}
            from <span className="purple">Colombo, Sri Lanka</span>, currently
            based in <span className="purple">Singapore</span>.
            <br />
            I'm working as a{" "}
            <span className="purple">Software Consultant at IBM</span>, deployed
            at the{" "}
            <span className="purple">
              Monetary Authority of Singapore (MAS)
            </span>
            .
            <br />
            I hold a{" "}
            <span className="purple">B.Sc. in Computer Science</span> from the{" "}
            <span className="purple">University of Colombo, Sri Lanka</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            inspired and growing:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs on Medium ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI & LLM innovations 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌏
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build systems that scale, ship features that matter!"{" "}
          </p>
          <footer className="blockquote-footer">Kasun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
