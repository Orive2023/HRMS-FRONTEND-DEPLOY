import React from 'react'
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const AnnouncementTable = ({announcements,setRecDelete}) => {

    const handleDelete = (id) => {
        setRecDelete(id)
    }
  return (
    <table className="table table-bordered table-hover shadow">
              <thead>
                <tr className="text-center">
                  <th>Sl.</th>
                  <th>Title</th>
                  <th>Start-Date</th>
                  <th>End-Date</th>
                  <th>Department Name</th>
                  <th>Company Name</th>
                  <th>Date</th>
                  <th>Description</th>
                  <th colSpan="3">Actions</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {announcements.map((announcements, index) => (
                  <tr key={announcements.announcementsId}>
                    <td scope="row" key={index}>
                      {index + 1}
                    </td>
                    <td>{announcements.title}</td>
                    <td>{announcements.startDate}</td>
                    <td>{announcements.endDate}</td>
                    <td>{announcements.departmentName}</td>
                    <td>{announcements.companyName}</td>
                    <td>{announcements.createdDate}</td>
                    <td>{announcements.description}</td>
                    <td>{}</td>

                    <td className="mx-2">
                      <Link
                        to={`/organisation/announcements-profile/${announcements.announcementsId}`}
                        className="btn btn-info"
                      >
                        <FaEye />
                      </Link>
                    </td>
                    <td className="mx-2">
                      <Link
                        to={`/organisation/edit-announcements/${announcements.announcementsId}`}
                        className="btn btn-warning"
                      >
                        <FaEdit />
                      </Link>
                    </td>
                    <td className="mx-2">
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          handleDelete(announcements.announcementsId)
                        }
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

export default AnnouncementTable