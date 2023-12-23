import React, { useEffect, useState } from "react";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import { MdAdd } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";

import * as api from "../api"
import StateTermination from "../StateTermination";
import TerminationTable from "../TerminationTable";
import TerminationForm from "../TerminationForm";


const TerminationView = () => {
 
  const {
    formData, setFormData,formVisible,setFormVisible, toggle, setToggle, termination, setTermination, recDelete, setRecDelete
  } =StateTermination();
 

 const handleButtonClick = () => {
  setFormVisible((prev) => !prev);
};


useEffect(() => {
  loadTermination();
}, []);

const loadTermination = async () => {
  const result = await api.loadTermination()
  setTermination(result);
};



const handleDelete = async () => {
  await api.deleteTermination(recDelete)
  loadTermination();
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
                    ADD TERMINATION
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
                  <h3> TERMINATION FORM</h3>
                </h3>
                <DialogContent>
                  <TerminationForm formData={formData} setFormData={setFormData} setFormVisible={setFormVisible} setToggle={setToggle}/>
                </DialogContent>
              </div>
            </Card>
          </Collapse>
          <TerminationTable termination={termination} setRecDelete={setRecDelete} />
        </section>
      </div>
    </div>
  </div>
);
}; 
export default TerminationView;
