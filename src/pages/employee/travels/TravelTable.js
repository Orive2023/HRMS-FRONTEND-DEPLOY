import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const TravelTable = ({travel,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(travel)
  return (
    <div className="table-start-container">
       <table id='table' className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
          <th>S. No</th>
            <th>Employee Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Place of Visit</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {travel
             && travel.map((travel, index) => (
              <tr key={travel.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{travel.employeeName}</td>
                <td>{travel.startDate}</td>
                <td>{travel.endDate}</td>
                <td>{travel.placeOfVisit}</td>
                <td className="mx-2">
                  <Link
                    to={`/employee/edit-travel/${travel.travelId}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(travel.travelId)}
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

export default TravelTable