import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit,  FaTrashAlt } from "react-icons/fa";

const ComplaintTable = ({complaint,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(complaint)
    
   
  return (
    <div>
       <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Complaints ID</th>
            <th>complaint title</th>
            <th>complaint date</th>
            <th>description</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {complaint && complaint
            
            .map((complaint, index) => (
              <tr key={complaint.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{complaint.complaintTitle}</td>
                <td>{complaint.complaintDate}</td>
                <td>{complaint.description}</td>
               
                <td className="mx-2">
                  <Link
                    to={`/edit-complaint/${complaint.complaintsId}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(complaint.complaintsId)}
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

export default ComplaintTable