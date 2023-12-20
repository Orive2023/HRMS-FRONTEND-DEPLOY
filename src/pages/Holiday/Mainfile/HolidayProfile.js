import React, {
    useEffect,
    useState,
  } from "react";
  import { useParams } from "react-router-dom";
  import axios from "axios";
  
  const HolidayProfile = () => {
    const { id } = useParams();
  
    const [holiday, setHoliday] = useState({
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
    });
  
    useEffect(() => {
      loadHoliday();
    }, []);
  
    const loadHoliday = async () => {
      const result = await axios.get(
        `http://localhost:8084/holidays/get/${id}`
      );
      setHoliday(result.data);
    };
  
    return (
      <section
        className="shadow"
        style={{ backgroundColor: "whitesmoke" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">
                    {`${holiday.eventName} ${holiday.startDate}`}
                  </h5>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary">
                      call
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-warning ms-1">
                      Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-9">
              <div className="card mb-4">
                <div className="card-body">
                  <hr />
  
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">
                      Event Name
                      </h5>
                    </div>
  
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {holiday.eventName}
                      </p>
                    </div>
                  </div>
  
                  <hr />
  
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">
                      Start Date
                      </h5>
                    </div>
  
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {holiday.startDate}
                      </p>
                    </div>
                  </div>
                  <hr />
  
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">
                      End Date
                      </h5>
                    </div>
  
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {holiday.endDate}
                      </p>
                    </div>
                  </div>
                  <hr />
  
                  <div className="row">
                    <div className="col-sm-3">
                      <h5 className="mb-0">
                      Description
                      </h5>
                    </div>
  
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {holiday.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HolidayProfile;
  