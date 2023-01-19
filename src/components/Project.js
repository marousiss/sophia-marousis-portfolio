import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;

export default function Project(props) {
  const styles = {
    imageSize: {
      height: "100%",
      width: "100%",
    },
  };

  /*
  <div className="col d-flex" id={props.index}>
      <div className="card mb-4 image-card">
        <img
          src={props.project.imageFile}
          className="port-image"
          alt=""
          style={styles.imageSize}
        />
        <div className="top-left">
          <a href={props.project.deployedUrl}>{props.project.title}</a>
          <a href={props.project.gitHubUrl}>{github}</a>
        </div>
      </div>
    </div>
  */

  return (
    <div className="row mb-5">
      <h3>Portfolio</h3>
      <div className="col-10 d-flex">
        <div className="row row-cols-2">
          {props.projects.map((project, index) => (
            <div className="col d-flex" id={index}>
              <div className="card mb-4 image-card">
                <img
                  src={project.imageFile}
                  className="port-image"
                  alt=""
                  style={styles.imageSize}
                />
                <div className="top-left">
                  <a href={project.deployedUrl}>{project.title}</a>
                  <a href={project.gitHubUrl}>{github}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}