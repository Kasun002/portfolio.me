import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriter = ()=> {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Front End Developer",
          "Back End Developer",
          "React JS, Angular",
          "Node JS, Express, Nest JS",
          "Mongo DB, sql",
          "Aws Lambda, Firebase",
          "Bitbucket, Github",
          "Jira, Confluence"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
