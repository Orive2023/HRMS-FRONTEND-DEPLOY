import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const DepartmentTable = ({salary,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(salary);
    
   
  return (
    <div>
        <table className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                  <th>SL.</th>
                  <th>Basic Salary</th>
                  <th>House Rental Allowance</th>
                  <th>Medical Allowance</th>
                  <th>Tax Deduction</th>
                  <th>Created Date</th>
                  <th colSpan="3">Actions</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {salary && salary
                  
                  .map((salary, index) => (
                    <tr key={index}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{salary.basicSalery}</td>
                      <td>{salary.houseRentAllowance}</td>
                      <td>{salary.medicalAllowance}</td>
                      <td>{salary.taxDeductiion}</td>
                      <td>{salary.createdDate}</td>
                      <td className="mx-2">
                        <Link
                          to={`/department-profile/${salary.salaryTemplateId}`}
                          className="btn btn-info"
                        >
                          <FaEye />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <Link
                          to={`/edit-department/${salary.salaryTemplateId}`}
                          className="btn btn-warning"
                        >
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(salary.salaryTemplateId)}
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