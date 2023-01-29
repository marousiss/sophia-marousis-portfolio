import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const github = <FontAwesomeIcon icon={faGithub} />;

export default function Project(props) {
  const styles = {
    projContainer: {
      width: "100%",
      margin: "0",
      padding: "0",
    },
    imgContainer: {
      maxHeight: "240px",
      width: "100%",
      margin: "0",
      padding: "0",
    },
    imageSize: {
      height: "100%",
      width: "100%",
      margin: "0",
      padding: "0",
    },

    discContainer: {
      backgroundColor: "#94d2bd",
      color: "black",
      fontSize: "15px",
      width: "100%",
    },
    cardH5: {
      color: "white",
    },
  };

  /*
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
  */

  return (
    <div className="row mb-5">
      <h3>Portfolio</h3>
      <div className="col-10 d-flex">
        <div className="row row-cols-2">
          {props.projects.map((project, index) => (
            <div key={index} className="col d-flex">
              <div
                className="card mb-4 mt-4 image-card"
                style={styles.projContainer}
              >
                <div className="card-body" style={styles.imgContainer}>
                  <img
                    src={project.imageFile}
                    className="port-image card-mg-top"
                    alt=""
                    style={styles.imageSize}
                  />
                  <div className="top-left">
                    <a href={project.deployedUrl}>{project.title}</a>
                    <a href={project.gitHubUrl}>{github}</a>
                  </div>
                </div>
                <div className="card-body" style={styles.discContainer}>
                  <h5 className="card-subtitle mb-1" style={styles.cardH5}>
                    {project.title}
                  </h5>
                  <p className="card-text">{project.description}</p>
                  <h5 className="card-subtitle mb-1" style={styles.cardH5}>
                    Technologies
                  </h5>
                  <p className="card-text">{project.technologies}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
