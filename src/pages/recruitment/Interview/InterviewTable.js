import React from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";

const InterviewTable = ({ interview, setRecDelete }) => {
  const handleDelete = (id) => {
    setRecDelete(id);
  };

  console.log(interview);

  return (
    <div className="table-start-container">
      <table className="table table-bordered table-hover shadow">
        <thead>
          <tr className="text-center">
            <th>SL.</th>
            <th>Candidate Email ID</th>
            <th>Scheduler Email ID</th>
            <th>interviewer Email ID</th>
            <th>Talent ID</th>
            <th>interview Status</th>
            <th>Meeting Link</th>
            <th>DateTime</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {interview &&
            interview.map((interview, index) => (
              <tr key={interview.id}>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{interview.candidateEmailId}</td>
                <td>{interview.schedulerEmailId}</td>
                <td>{interview.interviewerEmailId}</td>
                <td>{interview.talentId}</td>
                <td>{interview.interviewStatus}</td>
                <td>{interview.meetingLink}</td>
                <td>{interview.dateTime}</td>
                <td className="mx-2">
                  <Link
                    to={`/interview-profile/${interview.interviewId}`}
                    className="btn btn-info"
                  >
                    <FaEye />
                  </Link>
                </td>
                <td className="mx-2">
                  <Link
                    to={`/edit-interview/${interview.interviewId}`}
                    className="btn btn-warning"
                  >
                    <FaEdit />
                  </Link>
                </td>
                <td className="mx-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(interview.interviewId)}
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

export default InterviewTable;
