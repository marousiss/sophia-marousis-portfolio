import React from "react";

export default function Project(props) {
  const styles = {
    imageSize: {
      height: "100%",
      width: "100%",
    },
  };

  return (
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
          <a href={props.project.gitHubUrl}>GitHub</a>
        </div>
      </div>
    </div>
  );
}