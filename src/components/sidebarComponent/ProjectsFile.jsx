import React from "react";
import { useNavigate } from "react-router-dom";


const ProjectsFile = () => {
    const navigation = useNavigate()
  return (
    <div> <p onClick={() => navigation("/project")}>Projects</p></div>
  )
}

export default ProjectsFile