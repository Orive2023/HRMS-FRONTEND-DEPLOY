import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectLogo from "../../asset/24px/Project.png";

const ProjectsFile = () => {
  const navigation = useNavigate();
  return (
    <div>
      <dv className="logo-text-p" onClick={() => navigation("/project")}>
      <span></span>
        <img src={ProjectLogo} alt="Project" />
        <p>Projects</p>
      </dv>
    </div>
  );
};

export default ProjectsFile;
