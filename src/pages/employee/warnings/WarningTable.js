import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit,FaEye, FaTrashAlt } from "react-icons/fa";

const WarningTable = ({warning,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(warning)
    
   
  return (
    <div>
        <table id='table' className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Warning ID</th>
            <th>warning to employee</th>
            <th>warning type</th>
            <th>Subject</th>
            <th>Warning by employee</th>
            <th>Warning date</th>
            <th>Description</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
        {warning.map((warning,index) => (
                      <tr key={warning.id}>
                        <td>{warning.warningsId}</td>
                        <td>{warning.warningToEmployee}</td>
                        <td>{warning.warningType}</td>
                        <td>{warning.subject}</td>
                        <td>{warning.warningByEmployee}</td>
                        <td>{warning.warningDate}</td>
                        <td>{warning.description}</td>
                        <td className="mx-2">
                          <Link
                            to={`/employee/warning-profile/${warning.warningsId}`}
                            className="btn btn-info"
                          >
                            <FaEye />
                          </Link>
                        </td>
                        <td className="mx-2">
                          <Link
                            to={`/employee/edit-warning/${warning.warningsId}`}
                            className="btn btn-warning"
                          >
                            <FaEdit />
                          </Link>
                        </td>
                        <td className="mx-2">
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDelete(warning.warningsId)}
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

export default WarningTable