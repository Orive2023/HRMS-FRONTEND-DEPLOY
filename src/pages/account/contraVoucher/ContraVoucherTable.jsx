import React from 'react'
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContraVoucherTable = ({contraVoucher,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

  return (
    <table className="table table-bordered table-hover shadow">
    <thead>
      <tr className="text-center">
        <th>SL.</th>
        <th>VNo</th>
        <th>Date</th>
        <th>Account Name</th>
        <th>Ledger Comment</th>
        <th>Sub Type</th>
        <th>Debit</th>
        <th>Credit</th>
        <th>Reverse Account Name</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody className="text-center">
      {contraVoucher && contraVoucher
        .map((contraVoucher, index) => (
          <tr key={contraVoucher.contraVoucherId}>
            <th scope="row" key={index}>
              {index + 1}
            </th>
            <td>{contraVoucher.sl}</td>
            <td>{contraVoucher.vno}</td>
            <td>{contraVoucher.date}</td>
            <td>{contraVoucher.accountName}</td>
            <td>{contraVoucher.ledgerComment}</td>
            <td>{contraVoucher.subType}</td>
            <td>{contraVoucher.debit}</td>
            <td>{contraVoucher.credit}</td>
            <td>{contraVoucher.reverseAccountName}</td>
            <td>{contraVoucher.action}</td>
            <td className="mx-2">
              <Link
                to={`/contraVoucher-profile/${contraVoucher.contraVoucherId}`}
                className="btn btn-info"
              >
                <FaEye />
              </Link>
            </td>
            <td className="mx-2">
              <Link
                to={`/edit-ContraVoucher/${contraVoucher.contraVoucherId}`}
                className="btn btn-warning"
              >
                <FaEdit />
              </Link>
            </td>
            <td className="mx-2">
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(contraVoucher.contraVoucherId)}
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

export default ContraVoucherTable;