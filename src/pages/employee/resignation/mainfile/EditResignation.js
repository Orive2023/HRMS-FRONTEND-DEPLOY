import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

const EditResignation = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [resignation, setResignation] = useState({
    employeeName: "",
    noticeDate: "",
    resignationDate: "",
  });

  useEffect(() => {
    loadResignation();
  }, []);

  const loadResignation = async () => {
    const result = await axios.get(
      `http://localhost:8082/resignations/get/${id}`
    );
    setResignation(result.data);
  };

  const handleInputChange = (e) => {
    setResignation({
      ...resignation,
      [e.target.name]: e.target.value,
    });
  };
  const updateResignation = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://localhost:8082/resignations/update/${id}`,
      resignation
    );
    navigate("/employee/resignation");
  };

  return (
    <div>
		<Header />
		<div className="dashboard-container">
		  <SideBar />
		  <div className="head-foot-part" style={{ padding: "0" }}>
		  
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Resignation</h2>
      <form onSubmit={(e) => updateResignation(e)}>
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
            value={resignation.employeeName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="noticeDate">
            Notice Date
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="noticeDate"
            id="noticeDate"
            required
            value={resignation.noticeDate}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="resignationDate">
            Resignation Date
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="resignationDate"
            id="resignationDate"
            required
            value={resignation.resignationDate}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Update
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/employee/resignation"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default EditResignation;
