import React from 'react'
import { FaEye,FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PerformanceTable = ({performances,setRecDelete}) => {

  console.log(performances)
    const handleDelete = (id) => {
        setRecDelete(id)
    }
  return (
    <table className="table table-bordered table-hover shadow">
          <thead>
            <tr className="text-center">
              <th>Serial No</th>
              <th>Employee name</th>
              <th>Employee id </th>
              <th>Quality of Work Rating</th>
              <th>job Knowledge Rating</th>
              <th>Punctuality Rating</th>
              <th>Overall Rating</th>

              <th colSpan="1">Actions</th>
            </tr>
          </thead>

          <tbody className="text-center">
            {performances && performances
             
              .map((performances, index) => (
                <tr key={performances.performanceAppraisalId}>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{performances.employeeName}</td>
                  <td>{performances.employeeId}</td>
                  <td>{performances.qualityOfWorkRating}</td>
                  <td>{performances.jobKnowledgeRating}</td>
                  <td>{performances.punctualityAndAttendanceRating}</td>
                  <td>{performances.overallRating}</td>
                  <td className="mx-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(performances.performanceAppraisalId)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
  )
}

export default PerformanceTable