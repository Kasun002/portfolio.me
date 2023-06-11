import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const AboutCard = ()=> {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kasun Abaywardana </span> originally
            from <span className="purple"> Colombo, Sri Lanka</span>, currently based on <span className="purple">Singapore.</span>
            <br />
            I am an enthusiastic Software Engineer who brings ideas to life through the art of coding.
            <br />
            I am a motivated developer with experience in creating custom web applications using ReactJS, Angular, Cordova, HTML, CSS, and SASS for frontend and mobile development. For backend, I am proficient in Node.js, Next.js, and MongoDB. Additionally, I have expertise in utilizing AWS and Firebase for serverless development.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Play badminton
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
