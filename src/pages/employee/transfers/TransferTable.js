import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const TransferTable= ({transfer,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(transfer)
    
   
  return (
    <div className="table-start-container">
       <table id='table' className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Employee Name</th>
            <th>Transfer Date</th>
            <th>Transfer To Department</th>
            <th>Transfer To Location</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {transfer && transfer.map((transfer, index) => (
              <tr key={index}>
                <td>{transfer.employeeName}</td>
                <td>{transfer.transferDate}</td>
                <td>{transfer.departmentName}</td>
                <td>{transfer.locationName}</td>
                <td className="mx-2">
                  <Link
                    to={`/employee/transfer-profile/${transfer.transferId}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/employee/edit-transfer/${transfer.transferId}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(transfer.transferId)}
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

export default TransferTable;