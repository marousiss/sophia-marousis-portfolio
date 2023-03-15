import React from "react";

import ResumeFile from "../../assets/pdfs/myResume.pdf";

const frontEndSkills = [
  "HTML5",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "jQuery",
  "AJAX",
  "React"
];

const backEndSkills = [
  "Node.js",
  "Express.js",
  "MySQL",
  "Sequelize ORM",
  "MongoDB",
  "Mongoose ODM",
];
export default function Resume() {
  return (
    <div className="row mb-5">
      <div className="col-6">
        <h3>Resume</h3>
        <div>
          <p className="resume">
            Download my{" "}
            <a href={ResumeFile} download="SophiaMarousisResume.pdf">
              resume
            </a>
          </p>
        </div>
        <div>
          <h5>Front-End Skills</h5>
          <ul className="skills">
            {frontEndSkills.map((frontEndSkill, index) => (
              <li className="skills" key={index}>
                {frontEndSkill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>Back-End Skills</h5>
          <ul className="skills">
            {backEndSkills.map((backEndSkill, index) => (
              <li className="skills" key={index}>
                {backEndSkill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
