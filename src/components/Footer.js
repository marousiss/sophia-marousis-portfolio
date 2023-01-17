import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
const github = <FontAwesomeIcon icon={faGithub} />;
const envelope = <FontAwesomeIcon icon={faEnvelope} />;


export default function Footer() {

  return (
    <footer>
      <div className="row justify-content-center text-center mt-3 mb-3">
        <div className="col">
          <a href="mailto:maroursiss@gmail.com">{envelope}</a>
          <a href="https://github.com/marousiss">{github}</a>
          <a href="https://www.linkedin.com/in/sophiamarousis/">{linkedin}</a>
        </div>
      </div>
    </footer>
  );
}
