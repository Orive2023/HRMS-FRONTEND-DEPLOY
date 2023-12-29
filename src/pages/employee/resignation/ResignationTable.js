import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const  ResignationTable= ({resignation,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(resignation)
    
   
  return (
    <div className="table-start-container">
    <table id='table' className="table table-bordered table-hover shadow">
    <thead>
      <tr className="text-center">
        <th>Employee Name</th>
        <th>Notice Date</th>
        <th>Resignation Date</th>
        <th>Resignation Reason</th>
        <th>Status</th>
        <th colSpan="3">Actions</th>
      </tr>
    </thead>

    <tbody className="text-center">
      {resignation && resignation
        .map((resignation, index) => (
          <tr key={index}>
           
            <td>{resignation.employeeName}</td>
            <td>{resignation.noticeDate}</td>
            <td>{resignation.resignationDate}</td>
            <td>{resignation.resignationReason}</td>
            <td>{resignation.status}</td>

            {/* <td className="mx-2">
              <Link
                to={`/resignation-profile/${resignation.resignationId}`}
                className="btn btn-info"
              >
                <FaEye />
              </Link>
            </td> */}
            <td className="mx-2">
              <Link
                to={`/employee/edit-resignation/${resignation.resignationId}`}
                className="btn btn-warning"
              >
                <FaEdit />
              </Link>
            </td>
            <td className="mx-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(resignation.resignationId)}
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

export default ResignationTable