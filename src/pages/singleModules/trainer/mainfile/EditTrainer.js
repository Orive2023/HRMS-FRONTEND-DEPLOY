import React,{ useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom"
import Header from '../../../../components/Header';
import SideBar from '../../../../components/SideBar';


const EditTrainer = () => {

  let navigate = useNavigate();

  const {id} = useParams();
  const [trainer, setTrainer] = useState({
    trainersFullName: "",
    emailAddress: "",
    technicalSkills: "",
    phoneNo: "",
    softSkills: "",
    certifications: ""

  })

  useEffect(() => {
    loadTrainer();
  },[])

  const loadTrainer = async () => {
    const result = await axios.get(`http://13.200.246.216:5000/trainerslist/get/${id}`);
    setTrainer(result.data);
  };

  const handleInputChange = (e) => {
    setTrainer({
      ...trainer,
      [e.target.name]: e.target.value,
    });
  };

  const updateTrainer = async (e) => {
    e.preventDefault();
    await axios.put(`http://13.200.246.216:5000/trainerslist/update/${id}`, trainer);
    navigate("/trainer");
  };

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <div className="col-sm-8 py-2 px-5 offset-2 shadow">
            <h2 className="mt-5"> Edit Trainer</h2>
            <form onSubmit={(e) => updateTrainer(e)}>
              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="Budget">
                  Trainer Full Name
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="trainersFullName"
                  id="trainersFullName"
                  required
                  value={trainer.trainersFullName}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>

              <div className="input-group mb-5">
                <label className="input-group-text" htmlFor="clientName">
                  Trainer's Email Address
                </label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="emailAddress"
                  id="emailAddress"
                  required
                  value={trainer.emailAddress}
                  onChange={(e) => handleInputChange(e)}
                />
              </div>


              <div className="input-group mb-5">
                <label className="input-group-text">Phone No</label>
                <input
                  className="form-control col-sm-6"
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  required
                  value={trainer.phoneNo}
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
                    to={"/trainer"}
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
  )
}

export default EditTrainer