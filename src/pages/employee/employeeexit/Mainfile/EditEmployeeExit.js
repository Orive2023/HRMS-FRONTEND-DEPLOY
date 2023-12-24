import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployeeExit = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [employeeExit, setemployeeExit] = useState({
    employeeToExit: "",
    typeOfExit: "",
    email: "",
    exitDate: "",
  });

  const { employeeToExit, typeOfExit, email, exitDate } = employeeExit;

  useEffect(() => {
    loademployeeExit();
  }, []);

  const loademployeeExit = async () => {
    const result = await axios.get(
      `http://13.200.246.216:5000/employee_exit/get/${id}`
    );
    setemployeeExit(result.data);
	console.log(employeeExit);
  };


  const handleInputChange = (e) => {
    setemployeeExit({
      ...employeeExit,
      [e.target.name]: e.target.value,
    });
  };
  const updateemployeeExit = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://13.200.246.216:5000/employee_exit/update/${id}`,
      employeeExit
    );
    navigate("/employee/employee-exit");
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
          <h2 className="mt-5"> Edit employeeExit</h2>
          <form onSubmit={(e) => updateemployeeExit(e)}>
            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="employeeExitName">
                EmployeeExit Name
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="employeeToExit"
                id="employeeToExit"
                value={employeeToExit}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="employeeExitType">
                employeeExit Type
              </label>
              <input
                className="form-control col-sm-6"
                type="text"
                name="typeOfExit"
                id="typeOfExit"
                value={typeOfExit}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="email">
                Your Email
              </label>
              <input
                className="form-control col-sm-6"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="input-group mb-5">
              <label className="input-group-text" htmlFor="website">
                Website
              </label>
              <input
                className="form-control col-sm-6"
                type="date"
                name="exitDate"
                id="exitDate"
                value={exitDate}
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
                  to={"/employee/employee-exit"}
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

export default EditEmployeeExit;
