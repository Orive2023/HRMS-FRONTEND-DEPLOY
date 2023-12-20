import React, { useEffect, useState } from "react";

import SideBar from "../../../components/SideBar";
import Header from "../../../components/Header";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import { MdAdd } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";

import * as api from "../api"
import StateHoliday from "../StateHoliday";
import HolidayTable from "../HolidayTable";
import HolidayForm from "../HolidayForm";


const HolidayView = () => {
 
  const {
    holiday,setHoliday,formVisible,setFormVisible,toggle,setToggle,formErrors,setFormerrors,formControl,setFormControl,search,setSearch,dateError,setDateError,open,setOpen,recDelete,setRecDelete,formData,setFormData
} =StateHoliday();
 

 const handleButtonClick = () => {
  setFormVisible((prev) => !prev);
};


useEffect(() => {
  loadHoliday();
}, []);

const loadHoliday = async () => {
  const result = await api.loadHoliday()
  setHoliday(result);
};



const handleDelete = async () => {
  await api.deleteHoliday(recDelete)
  loadHoliday();
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
                    ADD HOLIDAY
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
                  <h3> HOLIDAY FORM</h3>
                </h3>
                <DialogContent>
                
                  <HolidayForm/>
                </DialogContent>
              </div>
            </Card>
          </Collapse>
          <HolidayTable holiday={holiday} setRecDelete={setRecDelete} />
        </section>
      </div>
    </div>
  </div>
);
}; 
export default HolidayView;
