import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt, FaEye } from "react-icons/fa";
import StateEmployee from "./StateEmployee";

const EmployeeTable = ({ employee, setRecDelete }) => {
  const handleDelete = (id) => {
    setRecDelete(id);
  };

  const renderEmployeeData = () => {
    return (
      <tr>
        <td colSpan="12" className="text-center">
          Data Not Found
        </td>
      </tr>
    );
  };

  console.log(employee);

  console.log(employee.length);
  return (
    <div>
      <table id='table' className="table table-bordered table-hover">
        <thead>
          <tr className="text-center">
            <th>SL</th>
            <th>Employee Name</th>
            <th>Photograph</th>
            <th>Employee Id</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Country</th>
            <th>City</th>
            <th>Team Leader Name</th>
            <th>Status</th>

            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {employee.length === 0
            ? renderEmployeeData()
            : employee && employee.map && employee.map((employee, index) => (
                <tr key={employee.id}>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{employee.employeeName}</td>
                  <td>
                    <img src={employee.uploadPhoto} />
                  </td>
                  <td>{employee.employeeId}</td>
                  <td>{employee.phone}</td>
                  <td>{employee.email}</td>
                  <td>{employee.country}</td>
                  <td>{employee.city}</td>
                  <td>{employee.teamLeaderName}</td>
                  <td>{employee.status}</td>

                  <td className="mx-2">
                    <Link
                      to={`/employee-profile/${employee.employeeId}`}
                      className="btn btn-info"
                    >
                      <FaEye />
                    </Link>
                  </td>
                  <td className="mx-2">
                    <Link
                      to={`/edit-employee/${employee.employeeId}`}
                      className="btn btn-warning"
                    >
                      <FaEdit />
                    </Link>
                  </td>
                  <td className="mx-2">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(employee.employeeId)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
