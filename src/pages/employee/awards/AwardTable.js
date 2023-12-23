import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit,  FaTrashAlt } from "react-icons/fa";

const AwardTable = ({award,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(award)
    
   
  return (
    <div>
        <table id='table' className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                <th>SL</th>
                  <th>Employee Name</th>
                  <th>Awards Name</th>
                  <th>Awards By</th>
                  <th>Gift</th>
                  <th>Awards Date</th>
                  <th>Status</th>
                  <th colSpan={2}>Action</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {award && award
                  
                  .map((award, index) => (
                    <tr key={index}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                      <td>{award.employeeName}</td>
                      <td>{award.awardDescription}</td>
                      <td>{award.awardBy}</td> 
                      <td>{award.giftItem}</td>
                      <td>{award.date}</td>
                      <td>{award.status}</td>
                     
                      <td className="mx-2">
                        <Link
                          to={`/employee/edit-awards/${award.awardId}`}
                          className="btn btn-warning"
                        >
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(award.awardId)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
    </div>
  )
}

export default AwardTable