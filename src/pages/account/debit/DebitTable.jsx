import React from 'react'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const DebitTable = ({debit,setRecDelete}) => {

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
      {debit && debit
        .map((debit, index) => (
          <tr key={debit.expenceId}>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td>{debit.expenceType}</td>
            <td>{debit.purchaseDate}</td>
            <td>{debit.amount}</td>
            <td>{debit.totalAmount}</td>
            <td>{debit.purchaseBy}</td>
            <td>{debit.description}</td>
            <td>{debit.status}</td>
            <td className="mx-2">
              <Link
                to={`/expenses-profile/${debit.expenceId}`}
                className="btn btn-info"
              >
                <FaEye />
              </Link>
            </td>
            <td className="mx-2">
              <Link
                to={`/edit-Expenses/${debit.expenceId}`}
                className="btn btn-warning"
              >
                <FaEdit />
              </Link>
            </td>
            <td className="mx-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(debit.expenceId)}
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

export default DebitTable;