import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const LeaveTable = ({leave,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(leave)
    
   
  return (
    <div className="table-start-container">
        <table id='table' className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                 <th>Sl</th>
                  <th>Employee Name</th>
                  <th>Leave Type</th>
                  <th>Request Duration</th>
                  <th>Applied On</th>
                  <th>Reason</th>
                  <th>Status</th>
                  <th>Action</th>
                  
                </tr>
              </thead>

              <tbody className="text-center">
                {leave && leave
                  
                  .map((leave, index) => (
                    <tr key={index}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                    
                      <td>{leave.Sl}</td>
                      <td>{leave.EmployeeName}</td>
                      <td>{leave.LeaveType}</td>
                      <td>{leave.RequestDuration}</td>
                      <td>{leave.AppliedOn}</td>
                      <td>{leave.Reason}</td>
                      <td>{leave.Status}</td>
                      <td>{leave.Action}</td>
                 
                      
                    
                      <td className="mx-2">
                        <Link
                          to={`/edit-leave/${leave.leaveId}`}
                          className="btn btn-warning"
                        >
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(leave.leaveId)}
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

export default LeaveTable