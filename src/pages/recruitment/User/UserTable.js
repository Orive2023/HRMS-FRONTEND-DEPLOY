import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const UserTable = ({user,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(user)
    
   
  return (
    <div>
        <table className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                 
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  
                </tr>
              </thead>

              <tbody className="text-center">
                {user && user
                  
                  .map((user, index) => (
                    <tr key={index}>
                      <th scope="row" key={index}>
                        {index + 1}
                      </th>
                    
                      
                      <td>{user.Name}</td>
                      <td>{user.Email}</td>
                      <td>{user.Role}</td>
                 
                      
                    
                      <td className="mx-2">
                        <Link
                          to={`/edit-user/${user.userId}`}
                          className="btn btn-warning"
                        >
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="mx-2">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(user.userId)}
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

export default UserTable