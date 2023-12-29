import React from 'react'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreditTable = ({credit,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

  return (
    <table className="table table-bordered table-hover shadow">
    <thead>
      <tr className="text-center">
        <th>SL.</th>
        <th>Expense Type</th>
        <th>Purchase Date</th>
        <th>Amount</th>
        <th>Total Amount</th>
        <th>Purchased By</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>

    <tbody className="text-center">
      {credit && credit
        .map((credit, index) => (
          <tr key={credit.expenceId}>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td>{credit.expenceType}</td>
            <td>{credit.purchaseDate}</td>
            <td>{credit.amount}</td>
            <td>{credit.totalAmount}</td>
            <td>{credit.purchaseBy}</td>
            <td>{credit.description}</td>
            <td>{credit.status}</td>
            <td className="mx-2">
              <Link
                to={`/expenses-profile/${credit.expenceId}`}
                className="btn btn-info"
              >
                <FaEye />
              </Link>
            </td>
            <td className="mx-2">
              <Link
                to={`/edit-Expenses/${credit.expenceId}`}
                className="btn btn-warning"
              >
                <FaEdit />
              </Link>
            </td>
            <td className="mx-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(credit.expenceId)}
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

export default CreditTable;