import React, { useEffect } from "react";
//import Search from "../../common/Search";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from '@mui/material/DialogTitle';
import { BiSolidHide } from "react-icons/bi";


import { MdAdd } from "react-icons/md";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";
import Collapse from "@mui/material/Collapse";
import { Card } from "@mui/material";

import * as api from "../api";
import StateComplaint from "../StateComplaint";
import ComplaintTable from "../ComplaintTable";
import ComplaintForm from "../ComplaintForm";

const ComplaintView = () => {
  const {
    setComplaint,
    complaint,
    setRecDelete,
    recDelete,
    formVisible,
    toggle,
    setToggle,
    setFormVisible,
    formData,setFormData
   
  } = StateComplaint();
  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  useEffect(() => {
    loadcomplaint();
  }, []);

  const loadcomplaint = async () => {
    const result = await api.loadComplaint();
    setComplaint(result);
  };


  const handleDelete = async () => {
    await api.deleteProject(recDelete);
    loadcomplaint();
  };
  useEffect(() => {
    if (recDelete !== "") {
      handleDelete();
      setRecDelete("");
    }
  });
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
                  style={{ height: "35px",margin:"10px 0" }}
                >
                  {toggle ? (
                    <div className="hide">
                      <BiSolidHide />
                      HIDE
                    </div>
                  ) : (
                    <div>
                      <MdAdd />
                      ADD EMPLOYEE
                    </div>
                  )}
                </Button>
              </div>
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
                    <h3>COMPLAINT FORM</h3>
                  </h3>
                  <DialogContent>
                    <ComplaintForm formData={formData} setFormData={setFormData} setFormVisible={setFormVisible} setToggle={setToggle}/>
                  </DialogContent>
                </div>
              </Card>
            </Collapse>

            <ComplaintTable complaint={complaint} setRecDelete={setRecDelete} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ComplaintView;
