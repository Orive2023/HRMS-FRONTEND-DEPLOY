import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
const EditTermination = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [termination, setTermination] = useState({
    employeeName: "",
    terminateDate: "",
    reasonForTermination: "",
    terminatedBy: "",
  });
  const { employeeName, terminateDate, reasonForTermination, terminatedBy } =
    termination;

  useEffect(() => {
    loadTermination();
  }, []);

  const loadTermination = async () => {
    const result = await axios.get(
      `http://13.200.246.216:5000/terminations/get/${id}`
    );
    setTermination(result.data);
  };

  const handleInputChange = (e) => {
    setTermination({
      ...termination,
      [e.target.name]: e.target.value,
    });
  };
  const updateTermination = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://13.200.246.216:5000/terminations/update/${id}`,
      termination
    );
    navigate("/employee/termination");
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
          <h2 className="mt-5"> Edit Termination</h2>
          <form onSubmit={(e) => updateTermination(e)}>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="employeeName">
                Employee Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="employeeName"
                id="employeeName"
                required
                value={employeeName}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="terminationType">
                Terminate Date
              </label>
              <input
                className="form-control col-sm-6"
                type="date"
                name="terminateDate"
                id="terminateDate"
                required
                value={terminateDate}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-group mb-5">
              <label
                className="input-group-text"
                htmlFor="reasonForTermination"
              >
                Reason For Termination
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="reasonForTermination"
                id="reasonForTermination"
                required
                value={reasonForTermination}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="terminatedBy">
                Terminated By
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="terminatedBy"
                id="terminatedBy"
                required
                value={terminatedBy}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="row mb-5">
              <div className="col-sm-2">
                <button
                  type="submit"
                  className="btn btn-outline-success btn-lg"
                >
                  Save
                </button>
              </div>

              <div className="col-sm-2">
                <Link
                  to={"/employee/termination"}
                  type="submit"
                  className="btn btn-outline-warning btn-lg"
                >
                  Cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTermination;
