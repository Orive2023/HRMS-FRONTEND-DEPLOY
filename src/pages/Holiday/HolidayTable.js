import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const HolidayTable = ({holiday,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(holiday)

    return (
        <div>
            <table className="table table-bordered table-hover shadow">
                  <thead>
                    <tr className="text-center">
                      <th>SL.</th>
                      <th>Event Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
    
                  <tbody className="text-center">
                    {holiday &&
                      
                      holiday.map((holiday, index) => (
                        <tr key={index}>
                          <th scope="row" key={index}>
                            {index + 1}
                          </th>
                          <td>{holiday.eventName}</td>
                          <td>{holiday.startDate}</td>
                          <td>{holiday.endDate}</td>
                          <td className="mx-2">
                            <Link
                              to={`/holiday-profile/${holiday.holidaysId}`}
                              className="btn btn-info"
                            >
                              <FaEye />
                            </Link>
                          </td>
                          <td className="mx-2">
                            <Link
                              to={`/edit-holiday/${holiday.holidaysId}`}
                              className="btn btn-warning"
                            >
                              <FaEdit />
                            </Link>
                          </td>
                          <td className="mx-2">
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(holiday.holidaysId)}
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
    
    export default HolidayTable