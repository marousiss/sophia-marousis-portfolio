import React from "react";
import Project from "../Project";

import projects from "../ProjectList";

export default function Portfolio() {
  return (
    <Project projects={projects} />
  );
}