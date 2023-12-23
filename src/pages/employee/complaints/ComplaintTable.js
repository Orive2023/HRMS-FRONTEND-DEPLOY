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
       <table id='table' className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>S No</th>
            <th>Complaint Title</th>
            <th>Complaint From</th>
            <th>Complaint Date</th>
            <th>Complaint Against</th>
            <th>Description</th>
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
                <td>{complaint.complaintFrom}</td>
                <td>{complaint.complaintDate}</td>
                <td>{complaint.complaintAgainst}</td>
                <td>{complaint.description}</td>
               
                <td className="mx-2">
                  <Link
                    to={`/employee/edit-complaint/${complaint.complaintsId}`}
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