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

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";

const EditLocation = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  console.log(id)

  const [location, setLocation] = useState({
    companyName: "",
    locationName: "",
    email: "",
    phone: "",
    faxNumber: "",
    locationHead: "",
    address: "",
  });

  useEffect(() => {
    loadLocation();
  }, []);

  const loadLocation = async () => {
    const result = await axios.get(
      `http://13.200.246.216:5000/location/get/${id}`
    );
    setLocation(result.data);
  };

  const handleInputChange = (e) => {
    setLocation({
      ...location,
      [e.target.name]: e.target.value,
    });
  };
  const updateLocation = async (e) => {
    e.preventDefault()
    await axios.put(
      `http://13.200.246.216:5000/location/update/${id}`,
      location
    );
    navigate("/organisation/location");
  };

  console.log(location)

  return (
    <div>
    <Header />
    <div className="dashboard-container">
      <SideBar />
      <div className="head-foot-part" style={{ padding: "0" }}>
      <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5"> Edit Location</h2>
      <form onSubmit={(e) => updateLocation(e)}>
        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="locationType">
            Company
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="companyName"
            id="companyName"
            required
            value={location.companyName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="locationName">
            Location Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="locationName"
            id="locationName"
            required
            value={location.locationName}
            onChange={(e) => handleInputChange(e)}
          />

        </div><div className="input-group mb-5">
          <label
            className="input-group-text"
            htmlFor="locationType">
            Email
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="email"
            id="email"
            required
            value={location.email}
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
              to={"/organisation/location"}
              type="submit"
              className="btn btn-outline-warning btn-lg">
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

export default EditLocation;
