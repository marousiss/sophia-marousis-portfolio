import React from "react";
import Project from "../Project";

import projects from "../ProjectList";

/*
<div className="row mb-5">
      <h3>Portfolio</h3>
      <div className="col-8 d-flex">
        <div className="row row-cols-2">
          {projects.map((project, index) => (
            <Project project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
*/

export default function Portfolio() {
  return (
    <Project projects={projects} />
  );
}