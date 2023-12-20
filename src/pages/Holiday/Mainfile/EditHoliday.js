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
  
  const EditHoliday = () => {
    let navigate = useNavigate();
  
    const { id } = useParams();
  
    const [holiday, setHoliday] = useState({
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
    });
    const {
        eventName, startDate, endDate, description
    } = holiday;
  
    useEffect(() => {
      loadHoliday();
    }, []);
  
    const loadHoliday = async () => {
      const result = await axios.get(
        `http://localhost:8084/holidays/get/${id}`
      );
      setHoliday(result.data);
    };
  
    const handleInputChange = (e) => {
      setHoliday({
        ...holiday,
        [e.target.name]: e.target.value,
      });
    };
    const updateHoliday = async (e) => {
      e.preventDefault();
      await axios.put(
        `http://localhost:8084/holidays/update/${id}`,
        department
      );
      navigate("/view-holiday");
    };
  
    return (
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
        <h2 className="mt-5"> Edit Holiday</h2>
        <form onSubmit={(e) => updateHoliday(e)}>
          <div className="input-group mb-5">
            <label
              className="input-group-text"
              htmlFor="eventName">
              Event Name
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="eventName"
              id="eventName"
              required
              value={eventName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="input-group mb-5">
            <label
              className="input-group-text"
              htmlFor="startDate">
              Start Date
            </label>
            <input
              className="form-control col-sm-6"
              type="date"
              name="startDate"
              id="startDate"
              required
              value={startDate}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
              End Date
            </label>
            <input
              className="form-control col-sm-6"
              type="date"
              name="endDate"
              id="endDate"
              required
              value={endDate}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
  
          {/* <div className="input-group mb-5">
            <label
              className="input-group-text"
            >
            Description
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="description"
              id="description"
              required
              value={description}
              onChange={(e) => handleInputChange(e)}
            />
          </div> */}
  
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
                to={"/view-holiday"}
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
  
  export default EditHoliday;
  