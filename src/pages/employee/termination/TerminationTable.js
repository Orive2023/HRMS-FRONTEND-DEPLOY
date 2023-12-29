import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const TerminationTable = ({termination,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(termination)

    return (
        <div className="table-start-container">
            <table id='table' className="table table-bordered table-hover shadow">
                  <thead>
                    <tr className="text-center">
                      <th>SL.</th>
                      <th>Employee Name</th>
                      <th>Terminate Date</th>
                      <th>Reason For Terminate</th>
                      <th>Terminated By</th>
                      <th>Status</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>
    
                  <tbody className="text-center">
                    {termination && termination.map &&
                      
                      termination.map((termination, index) => (
                        <tr key={index}>
                          <th scope="row" key={index}>
                            {index + 1}
                          </th>
                          <td>{termination.employeeName}</td>
                          <td>{termination.terminateDate}</td>
                          <td>{termination.reasonForTermination}</td>
                          <td>{termination.terminatedBy}</td>
                          <td></td>
                          {/* <td className="mx-2">
                            <Link
                              to={`/termination-profile/${termination.terminationId}`}
                              className="btn btn-info"
                            >
                              <FaEye />
                            </Link>
                          </td> */}
                          <td className="mx-2">
                            <Link
                              to={`/employee/edit-termination/${termination.terminationId}`}
                              className="btn btn-warning"
                            >
                              <FaEdit />
                            </Link>
                          </td>
                          <td className="mx-2">
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(termination.terminationId)}
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
    
    export default TerminationTable