import React from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FinancialYearTable = ({ financialYearSection, setRecDelete }) => {
  const handleDelete = (id) => {
    setRecDelete(id);
  };
  return (
    <table className="table table-bordered table-hover shadow">
      <thead>
        <tr className="text-center">
          <th>SL.</th>
          <th>Financial Year</th>
          <th>Financial Year Start Date</th>
          <th>Financial Year End Date</th>
          <th>Created Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody className="text-center">
        {financialYearSection &&
          financialYearSection.map((financialYearSection, index) => (
            <tr key={financialYearSection.expenceId}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{financialYearSection.financialYear}</td>
              <td>{financialYearSection.financialYearStartDate}</td>
              <td>{financialYearSection.financialYearEndDate}</td>
              <td>{financialYearSection.createdDate}</td>
              <td>{financialYearSection.status}</td>
              <td className="mx-2">
                <Link
                  to={`/policies-profile/${financialYearSection.financialYearSectionId}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-policies/${financialYearSection.financialYearSectionId}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(financialYearSection.financialYearSectionId)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default FinancialYearTable;
