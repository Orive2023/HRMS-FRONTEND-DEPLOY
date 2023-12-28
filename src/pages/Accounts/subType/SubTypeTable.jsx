import React from "react";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SubTypeTable = ({ subType, setRecDelete }) => {
  const handleDelete = (id) => {
    setRecDelete(id);
  };
  return (
    <table className="table table-bordered table-hover shadow">
      <thead>
        <tr className="text-center">
          <th>SL.</th>
          <th>Subtype</th>
          <th>Account Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody className="text-center">
        {subType &&
          subType.map((subType, index) => (
            <tr key={subType.expenceId}>
              <th scope="row" key={index}>
                {index + 1}
              </th>
              <td>{subType.subtype}</td>
              <td>{subType.accountName}</td>
              <td>{subType.status}</td>
              <td className="mx-2">
                <Link
                  to={`/policies-profile/${subType.subTypeId}`}
                  className="btn btn-info"
                >
                  <FaEye />
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-policies/${subType.subTypeId}`}
                  className="btn btn-warning"
                >
                  <FaEdit />
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(subType.subTypeId)}
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

export default SubTypeTable;
