import React from 'react'
import {FaEye,FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PoliciesTable = ({policies,setRecDelete}) => {
    const handleDelete = (id) => {
        setRecDelete(id)
    }
  return (
    <table className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                  <th>SL.</th>
                  <th>Company name</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th colSpan="3">Actions</th>

                </tr>
              </thead>

              <tbody className="text-center">
                {policies.map((policies, index) => (
                  <tr key={policies.expenceId}>
                    <th scope="row" key={index}>
                      {index + 1}
                    </th>
                    <td>{policies.companyName}</td>
                    <td>{policies.title}</td>
                    <td>{policies.description}</td>
                   
                    <td className="mx-2">
                      <Link
                        to={`/organisation/policies-profile/${policies.policiesId}`}
                        className="btn btn-info"
                      >
                        <FaEye />
                      </Link>
                    </td>
                    <td className="mx-2">
                      <Link
                        to={`/organisation/edit-policies/${policies.policiesId}`}
                        className="btn btn-warning"
                      >
                        <FaEdit />
                      </Link>
                    </td>
                    <td className="mx-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(policies.policiesId)}
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

export default PoliciesTable