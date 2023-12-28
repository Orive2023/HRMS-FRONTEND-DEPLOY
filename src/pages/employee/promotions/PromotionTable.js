import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit,  FaTrashAlt } from "react-icons/fa";

const PromotionTable = ({promotion,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(promotion)
    
   
  return (
    <div>
        <table id='table' className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>Employee name</th>
            <th>promotion title</th>
            <th>promotion date</th>
            <th>description</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {promotion && promotion
            
            .map((promotion, index) => (
              <tr key={index}>
                <td>{promotion.employeeName}</td>
                <td>{promotion.promotionTitle}</td>
                <td>{promotion.promotionDate}</td>
                <td>{promotion.description}</td>
               
                <td className="mx-2">
                  <Link
                    to={`/employee/edit-promotions/${promotion.promotionsId}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(promotion.promotionsId)}
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

export default PromotionTable