import React from 'react'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const BalanceTable = ({balance,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

  return (
    <table className="table table-bordered table-hover shadow">
    <thead>
      <tr className="text-center">
        <th>SL.</th>
        <th>Financial Year</th>
        <th>Date</th>
        <th>Total Debit</th>
        <th>Total Credit</th>
        <th>Status</th>
        <th colSpan="3">Actions</th>
      </tr>
    </thead>

    <tbody className="text-center">
      {balance && balance
        .map((expense, index) => (
          <tr key={expense.expenceId}>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td>{balance.financialYear}</td>
            <td>{balance.date}</td>
            <td>{balance.totalDebit}</td>
            <td>{balance.totalAmount}</td>
            <td>{balance.status}</td>
            
            <td className="mx-2">
              <Link
                to={`/balance-profile/${balance.balanceId}`}
                className="btn btn-info"
              >
                <FaEye />
              </Link>
            </td>
            <td className="mx-2">
              <Link
                to={`/edit-balance/${balance.balanceId}`}
                className="btn btn-warning"
              >
                <FaEdit />
              </Link>
            </td>
            <td className="mx-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(balance.balanceId)}
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

export default BalanceTable;