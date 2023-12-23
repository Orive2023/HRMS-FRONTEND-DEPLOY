import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import CompanyLogoFile from "../../../../components/CompanyLogoFile";

const EditSalaryTemplate = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [salaryTemplate, setSalaryTemplate] = useState({
    basicSalary: "",
  });


  useEffect(() => {
    loadSalaryTemplate();
  }, []);
  const loadSalaryTemplate = async () => {
    const result = await axios.get(
        `http://localhost:8085/salaryTemplate/get/${id}`
    );
    setSalaryTemplate(result.data);
};

  const handleInputChange = (e) => {
    setSalaryTemplate({
      ...salaryTemplate,
      [e.target.name]: e.target.value,
    });
  };
const updateSalaryTemplate = async (e) => {
    e.preventDefault();
    await axios.put(
        `http://localhost:8085/salaryTemplate/update/${id}`,
      salaryTemplate
    );
    navigate("/payroll/salaryTemplate");
};

  return (

    <div>
     <div id="header-container" className="header-container">
    <CompanyLogoFile />
      <Header />
    </div>
    <div className="dashboard-container">
      <SideBar />
      <div className="head-foot-part">
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Edit Salary Template</h2>
      <form onSubmit={(e) => updateSalaryTemplate(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="LoanName">
            Basic Salary
          </label>
          <input
            className="form-control col-sm-6"
            type="number"
            name="basicSalary"
            id="basicSalary"
            required
            value={salaryTemplate.basicSalary}
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
              to={"/payroll/salaryTemplate"}
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

export default EditSalaryTemplate;
