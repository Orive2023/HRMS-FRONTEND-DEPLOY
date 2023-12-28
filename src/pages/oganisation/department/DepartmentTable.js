import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const DepartmentTable = ({department,setRecDelete}) => {
  const navigation = useNavigate()

    const handleDelete = (id) => {
        setRecDelete(id)
    }

  const handleProfile = (id) => {
    navigation(`/organisation/department-profile/${id}`)
  }
    
  return (
    <div className="table-start-container">
        <table id='table' className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                  <th>SL.</th>
                  <th>Department Name</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Department Head</th>
                  <th colSpan="3">Actions</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {department
                  
                  .map((department, index) => (
                    <tr key={index}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{department.departmentName}</td>
                      <td>{department.companyName}</td>
                      <td>{department.locationName}</td>
                      <td>{department.departmentHead}</td>
                      <td className="mx-2">
                         <Link
                          to={`/organisation/department-profile/${department.departmentId}`}
                          className="btn btn-primary"
                        >
                          <FaEye />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <Link
                          to={`/organisation/edit-department/${department.departmentId}`}
                          className="btn btn-warning"
                        >
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(department.departmentId)}
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

export default DepartmentTable