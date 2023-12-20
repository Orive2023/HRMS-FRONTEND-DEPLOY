import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit,  FaTrashAlt } from "react-icons/fa";

const ProjectTable = ({project,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(project)
    
   
  return (
    <div>
        <table className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>Project Name</th>
                  <th>Client Name</th>
                  <th>Company Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {project && project.map((project, index) => (
                    <tr key={project.projectsId}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{project.projectTitle}</td>
                      <td>{project.clientName}</td>
                      <td>{project.companyName}</td>
                      <td>{project.startDate}</td>
                      <td>{project.endDate}</td>
                     
                      <td className="mx-2">
                        <Link
                          to={`/project-edit/${project.projectId}`}
                          className="btn btn-warning"
                        >
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(project.projectsId)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
    </div>
  )
}

export default ProjectTable