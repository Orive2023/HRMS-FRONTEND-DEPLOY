import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const CandidateTable = ({candidate,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }

    console.log(candidate)

    return (
        <div>
            <table className="table table-bordered table-hover shadow">
                  <thead>
                    <tr className="text-center">
                      <th>SL.</th>
                      <th>Candidate Name</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Mobile No</th>
                      <th>CTC</th>
                      <th>ECTC</th>
                      <th>Location</th>
                      <th>Notice</th>
                      <th>Resume Url</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
    
                  <tbody className="text-center">
                    {candidate &&
                      
                      candidate.map((candidate, index) => (
                        <tr key={index}>
                          <th scope="row" key={index}>
                            {index + 1}
                          </th>
                          <td>{candidate.candidateName}</td>
                          <td>{candidate.address}</td>
                          <td>{candidate.email}</td>
                          <td>{candidate.mobileNo}</td>
                          <td>{candidate.ctc}</td>
                          <td>{candidate.ectc}</td>
                          <td>{candidate.location}</td>
                          <td>{candidate.notice}</td>
                          <td>{candidate.resumeUrl}</td>
                          
                          <td className="mx-2">
                            <Link
                              to={`/candidate-profile/${candidate.id}`}
                              className="btn btn-info"
                            >
                              <FaEye />
                            </Link>
                          </td>
                          <td className="mx-2">
                            <Link
                              to={`/edit-candidate/${candidate.id}`}
                              className="btn btn-warning"
                            >
                              <FaEdit />
                            </Link>
                          </td>
                          <td className="mx-2">
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(candidate.id)}
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
    
    export default CandidateTable