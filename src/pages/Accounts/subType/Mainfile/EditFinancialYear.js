import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditFinancialYear = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [financialYearSection, setFinancialYearSection] = useState({
    financialYear: "",
    financialYearStartDate:"",
    financialYearEndDate:""
  });

  const {
    financialYear,
    financialYearStartDate,
    financialYearEndDate
  } = financialYearSection;

  useEffect(() => {
    loadFinancialYear();
  }, []);

  const loadFinancialYear = async () => {
    const result = await axios.get(`http://localhost:8093/financialYear/get/${id}`);
    setFinancialYearSection(result.data);
  };

  const handleInputChange = (e) => {
    setFinancialYearSection({
      ...financialYearSection,
      [e.target.name]: e.target.value,
    });
  };

  const updateFinancialYear = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8093/financialYear/update/${id}`, expenses);
    navigate("/view-financialYear");
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit FInancial Year</h2>
      <form onSubmit={(e) => updateFinancialYear(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="purchaseDate">
            Financial year
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="financialYear"
            id="financialYear"
            required
            value={financialYear}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="purchaseDate">
            Financial year Start Date
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="financialYearStartDate"
            id="financialYearStartDate"
            required
            value={financialYearStartDate}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="purchaseDate">
            Financial year End Date
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="financialYeaEndDater"
            id="financialYearEndDate"
            required
            value={financialYearEndDate}
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
              to={"/view-financialYear"}
              type="submit"
              className="btn btn-outline-warning btn-lg"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditFinancialYear;
