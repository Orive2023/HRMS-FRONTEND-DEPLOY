import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const EmployeeExitTable = ({ employeeExit, setRecDelete }) => {
  const handleDelete = (id) => {
    console.log(id)
    setRecDelete(id);
  };

  console.log(employeeExit);

  return (
    <div className="table-start-container">
      <table id='table' className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>SL.</th>
            <th>Employee to Exit</th>
            <th>Exit date</th>
            <th>Type of Exit</th>
            <th>Exit interview</th>
            <th>Inactivate Employee Account</th>
            <th>Description</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {employeeExit &&
            employeeExit.map((employeeExit, index) => (
              <tr key={index}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employeeExit.employeeToExit}</td>
                <td>{employeeExit.exitDate}</td>
                <td>{employeeExit.typeOfExit}</td>
                <td>{employeeExit.exitInterview}</td>
                <td>{employeeExit.inactivateEmployeeAccount}</td>
                <td>{employeeExit.description}</td>
                {/* <td className="mx-2">
                  <Link
                    to={`/employeeExit-profile/${employeeExit.employeeExitId}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td> */}
                <td className="mx-2">
                  <Link
                    to={`/employee/edit-employee-exit/${employeeExit.employeeExitId}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      handleDelete(employeeExit.employeeExitId)
                    }
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

export default EmployeeExitTable;
