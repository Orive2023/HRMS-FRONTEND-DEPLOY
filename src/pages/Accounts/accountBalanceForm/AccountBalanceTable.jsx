import React from 'react'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AccountBalanceTable = ({accountBalance,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

  return (
    <table className="table table-bordered table-hover shadow">
    <thead>
      <tr className="text-center">
        <th>SL.</th>
        <th>Employee Name</th>
        <th>Employee ID</th>
        <th>HSA Balance</th>
        <th>FSA Balance</th>
        <th>Created Date</th>
        <th>Status</th>
        <th>Action</th>
     
      </tr>
    </thead>

    <tbody className="text-center">
      {accountBalance && accountBalance
        .map((accountBalance, index) => (
          <tr key={accountBalance.accountBalanceId}>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td>{accountBalance.sl}</td>
            <td>{accountBalance.employeeName}</td>
            <td>{accountBalance.employeeId}</td>
            <td>{accountBalance.hsaBalance}</td>
            <td>{accountBalance.fsaBalance}</td>
            <td>{accountBalance.createdDate}</td>
            <td>{accountBalance.status}</td>
            <td>{accountBalance.action}</td>
            
            <td className="mx-2">
              <Link
                to={`/accountBalance-profile/${accountBalance.accountBalanceId}`}
                className="btn btn-info"
              >
                <FaEye />
              </Link>
            </td>
            <td className="mx-2">
              <Link
                to={`/edit-accountBalance/${accountBalance.accountBalanceId}`}
                className="btn btn-warning"
              >
                <FaEdit />
              </Link>
            </td>
            <td className="mx-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(accountBalance.accountBalanceId)}
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

export default AccountBalanceTable;