import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const WorksheetTable = ({worksheet,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    return (
        <div>
            <table className="table table-bordered table-hover shadow">
                  <thead>
                    <tr className="text-center">
                      <th>SL.</th>
                      <th>Employee Name</th>
                      <th>Project</th>
                      <th>Task Name</th>
                      <th>Work Progress</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
    
                  <tbody className="text-center">
                    {worksheet && worksheet.map &&
                      
                      worksheet.map((worksheet, index) => (
                        <tr key={worksheet.workSheetId}>
                          <th scope="row" key={index}>
                            {index + 1}
                          </th>
                          <td>{worksheet.employeeName}</td>
                          <td>{worksheet.project}</td>
                          <td>{worksheet.taskName}</td>
                          <td>{worksheet.workProgress}</td>
                          <td>{worksheet.startDate}</td>
                          <td>{worksheet.endDate}</td>
                         
                          <td className="mx-2">
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(worksheet.workSheetId)}
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
    
    export default WorksheetTable