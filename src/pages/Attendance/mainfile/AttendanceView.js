import React, { useEffect} from "react";
import SideBar from "../../../components/SideBar";
import Header from "../../../components/Header";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import { MdAdd } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";

import * as api from "../api"
import StateAttendance from "../StateAttendance";
import AttendanceTable from "../AttendanceTable";
import AttendanceForm from "../AttendanceForm";


const  AttendanceView = () => {

  const {formVisible, setFormVisible,toggle,setToggle,recDelete,attendance,setAttendance, setRecDelete
  } = StateAttendance()

  
  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  useEffect(() => {
    loadAttendance();
  }, []);

  const loadAttendance = async () => {
    const result = await api.loadAttendance()
    console.log("rec",result);
    setAttendance(result);
  };



  const handleDelete = async () => {
    await api.deleteAttendance(recDelete)
    loadAttendance();
  };

  useEffect(() => {
    if (recDelete !== "") {
      handleDelete()
      setRecDelete("")
    }
  })
 


  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part">
          <section>
            <div
              className="above-table"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setToggle(!toggle);
                    handleButtonClick();
                  }}
                  style={{ height: "35px", marginBottom: "10px" }}
                >
                  {toggle ? (
                    <div className="hide">
                      <BiSolidHide
                      />
                      HIDE
                    </div>
                  ) : (
                    <div className="add">
                      <MdAdd />
                      ADD ATTENDANCE
                    </div>
                  )}
                </Button>
              </div>
            </div>
            <Collapse in={formVisible}>
              <Card
                variant="outlined"
                style={{ boxShadow: " 1px 1px 10px black" }}
              >
                <div style={{ marginTop: "20px" }}>
                  <h3
                    style={{
                      textAlign: "center",
                      marginTop: "25px",
                      fontWeight: "600",
                    }}
                  >
                    <h3>ATTENDANCE FORM</h3>
                  </h3>
                  <DialogContent>
                   
                    <AttendanceForm/>
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <AttendanceTable attendance={attendance} setRecDelete={setRecDelete} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AttendanceView;