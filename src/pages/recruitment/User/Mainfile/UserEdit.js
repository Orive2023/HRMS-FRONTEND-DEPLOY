import React, {
    useEffect,
    useState,
  } from "react";
  import axios from "axios";
  
  import {
    Link,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
  const EditUser = () => {
    let navigate = useNavigate();
  
    const { id } = useParams();
  
    const [user, setUser] = useState({
      departmentName: "",
      companyName: "",
      locationName: "",
      departmentHead: "",
    });
    const {
      departmentName, companyName, locationName, departmentHead
    } = user;
  
    useEffect(() => {
      loadUser();
    }, );
  
    const loadUser = async () => {
      const result = await axios.get(
        `http://localhost:8089/user/get/${id}`
      );
      setUser(result.data);
    };
  
    const handleInputChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };
    const updateUser = async (e) => {
      e.preventDefault();
      await axios.put(
        `http://localhost:8089/user/update/${id}`,
        user
      );
      navigate("/view-user");
    };
  
    return (
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
        <h2 className="mt-5"> Edit User</h2>
        <form onSubmit={(e) => updateUser(e)}>
          <div className="input-group mb-5">
            <label
              className="input-group-text"
              htmlFor="departmentName">
              Department Name
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="departmentName"
              id="departmentName"
              required
              value={departmentName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="input-group mb-5">
            <label
              className="input-group-text"
              htmlFor="departmentType">
              Company
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="companyName"
              id="companyName"
              required
              value={companyName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
              Location
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="locationName"
              id="locationName"
              required
              value={locationName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
              Department Head
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="departmentHead"
              id="departmentHead"
              required
              value={departmentHead}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="row mb-5">
            <div className="col-sm-2">
              <button
                type="submit"
                className="btn btn-outline-success btn-lg">
                Save
              </button>
            </div>
  
            <div className="col-sm-2">
              <Link
                to={"/view-jobPost"}
                type="submit"
                className="btn btn-outline-warning btn-lg">
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default EditUser;
  