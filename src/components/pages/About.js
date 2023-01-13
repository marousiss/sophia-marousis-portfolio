import React from "react";
import photo from "../../assets/images/sophiamarousis.jpeg";

export default function About() {
  return (
    <div>
      <h3>About me</h3>
      <div>
        <img className="image" src={photo} alt="me" />
      </div>
      <div>
        <p>
          Full-stack web developer recently with a certificate in full-stack web
          development from Rutgers University. Highly motivated problem solver
          effectively using my technical skills to design, build, and maintain
          websites according to the specifications.
        </p>
        <p>
          Self-directed professional with extensive experience in all phases of
          the software development life cycle, seeks to bring talent and
          technical expertise to a respected organization that values strong
          work ethic, solid critical thinking skills, and results.
        </p>
        <p>
          My goal is to obtain a full-time position as a full stack web
          developer, and utilize my skills and knowledge to enhance my career.
        </p>
      </div>
    </div>
  );
}
