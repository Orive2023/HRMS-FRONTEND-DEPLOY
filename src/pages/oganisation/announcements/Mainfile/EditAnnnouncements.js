import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

const EditAnnnouncements = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [announcement, setAnnouncement] = useState({
    title: "",
    startDate: "",
    endDate: "",
    description: "",
  });


  useEffect(() => {
    loadAnnouncement();
  }, []);

  const loadAnnouncement = async () => {
    const result = await axios.get(
      `http://13.200.246.216:5000/announcement/get/${id}`
    );
    setAnnouncement(result.data);
  };

  const handleInputChange = (e) => {
    setAnnouncement({
      ...announcement,
      [e.target.name]: e.target.value,
    });
  };

  const updateAnnouncement = async (e) => {
    e.preventDefault();
    await axios.put(
      `http://13.200.246.216:5000/announcement/update/${id}`,
      announcement 
    );
    navigate("/organisation/announcements");
  };

  return (

    <div>
    <Header />
    <div className="dashboard-container">
      <SideBar />
      <div className="head-foot-part" style={{ padding: "0" }}>
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Announcement</h2>
      <form onSubmit={(e) => updateAnnouncement(e)}>
        {/* ... (other input fields) ... */}

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="title">
            Title
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="title"
            id="title"
            required
            value={announcement.title}
            onChange={(e) => handleInputChange(e)}
          />
          </div>
          <div className="input-group mb-5">
           <label className="input-group-text" htmlFor="start-date">
            Start-Date
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="startDate"
            id="start-date"
            required
            value={announcement.startDate}
            onChange={(e) => handleInputChange(e)}
          />
          </div>
          <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="endDate">
           End-Date
          </label>
          <input
            className="form-control col-sm-6"
            type="date"
            name="endDate"
            id="endDate"
            required
            value={announcement.endDate}
            onChange={(e) => handleInputChange(e)}
          />
          </div>
        
          <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="description">
            Description
          </label>
           <input
            className="form-control col-sm-6"
            type="text"
            name="description"
            id="description"
            required
            value={announcement.description}
            onChange={(e) => handleInputChange(e)}
          />
          </div>

        <div className="row mb-5">
          <div className="col-sm-2" style={{marginRight:"20px"}}>
            <button
              type="submit"
              className="btn btn-outline-success btn-lg" 
            >
              Update
            </button>
          </div>

          <div className="col-sm-2">
            <Link
              to={"/organisation/announcements"}
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

export default EditAnnnouncements;
