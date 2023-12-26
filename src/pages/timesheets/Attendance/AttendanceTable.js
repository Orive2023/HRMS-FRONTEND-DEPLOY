import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const AttendanceTable = ({ attendance, setRecDelete }) => {
  const handleDelete = (id) => {
    setRecDelete(id);
  };
  console.log(attendance);

  return (
    <div>
      <table id="table" className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <td>SL</td>
            <th>Employee Name</th>
            <th>Clock In</th>
            <th>Clock Out</th>
            <th>Late</th>
            <th>Early Leaving</th>
            <th>Overtime</th>
            <th>Total Work</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {attendance &&
            attendance.map((attendance, index) => (
              <tr key={attendance.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{attendance.employeeName}</td>
                <td>{attendance.clockIn}</td>
                <td>{attendance.clockOut}</td>
                <td>{attendance.late}</td>
                <td>{attendance.earlyLeaving}</td>
                <td>{attendance.overtime}</td>
                <td>{attendance.totalWork}</td>
                <td>{attendance.status}</td>

                <td className="mx-2">
                  <Link
                    to={`/AttendanceForm-profile/${attendance.id}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-AttendanceForm/${attendance.id}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(attendance.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
