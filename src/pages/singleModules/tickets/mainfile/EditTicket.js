import React, {
    useEffect,
    useState,
  } from "react";
  import axios from "axios";

  import Header from "../../../../components/Header";
  import SideBar from "../../../../components/SideBar";
  
  import {
    Link,
    useNavigate,
    useParams,
  } from "react-router-dom";
  
  const EditTicket = () => {
    let navigate = useNavigate();
  
    const { id } = useParams();

  
    const [ticket, setTicket] = useState({
      employeeName: "",
    });
   
    useEffect(() => {
      loadTicket();
    }, []);
  
    const loadTicket = async () => {
      const result = await axios.get(
        `http://localhost:8088/tickets/get/${id}`
      );
      setTicket(result.data);
    };
  
    const handleInputChange = (e) => {
      setTicket({
        ...ticket,
        [e.target.name]: e.target.value,
      });
    };
    const updateTicket = async (e) => {
      e.preventDefault();
      await axios.put(
        `http://localhost:8088/tickets/update/${id}`,
        ticket
      );
      navigate("/ticket");
    };
  
    return (
      <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" style={{ padding: "0" }}>
        <div className="col-sm-8 py-2 px-5 offset-2 shadow">
        <h2 className="mt-5"> Edit Ticket</h2>
        <form onSubmit={(e) => updateTicket(e)}>
          <div className="input-group mb-5">
            <label
              className="input-group-text"
              htmlFor="employeeName">
             Employee Name
            </label>
            <input
              className="form-control col-sm-6"
              type="text"
              name="employeeName"
              id="employeeName"
              required
              value={ticket.employeeName}
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
                to={"/ticket"}
                type="submit"
                className="btn btn-outline-warning btn-lg">
                Cancel
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
  
  export default EditTicket;
  