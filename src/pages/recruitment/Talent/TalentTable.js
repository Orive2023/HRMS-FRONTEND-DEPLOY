import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const TalentTable = ({talent,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(talent)
    
   
  return (
    <div>
        <table className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                  <th>ID</th>
                  <th>Name</th>
                  <th>Project Name</th>
                  <th>Manager Name</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Job Location</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {talent && talent
                  .map((Talent, index) => (
                    <tr key={index}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{Talent.id}</td>
                      <td>{Talent.name}</td>
                      <td>{Talent.projectName}</td>
                      <td>{Talent.mangerName}</td>
                      <td>{Talent.startDate}</td>
                      <td>{Talent.endDate}</td>
                      <td>{Talent.jobLocation}</td>
                      
                    
                      <td className="mx-2">
                        <Link
                          to={`/edit-Talent/${Talent.TalentId}`}
                          className="btn btn-warning"
                        >
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(Talent.TalentId)}
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

export default TalentTable