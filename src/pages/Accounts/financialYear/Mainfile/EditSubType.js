import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditSubType = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [subType, setSubType] = useState({
    accountName: "",
  });

  const {
    accountName,
  } = subType;

  useEffect(() => {
    loadSubType();
  }, []);

  const loadSubType = async () => {
    const result = await axios.get(`http://localhost:8093/subType/get/${id}`);
    setSubType(result.data);
  };

  const handleInputChange = (e) => {
    setSubType({
      ...subType,
      [e.target.name]: e.target.value,
    });
  };

  const updateSubType = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8093/subType/update/${id}`, subType);
    navigate("/view-subType");
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Subtype</h2>
      <form onSubmit={(e) => updateSubType(e)}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="accountName">
            Account Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="accountName"
            id="accountName"
            required
            value={accountName}
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
              to={"/view-subType"}
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

export default EditSubType;
