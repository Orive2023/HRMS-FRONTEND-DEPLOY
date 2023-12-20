import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
//import Search from "../../common/Search";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from '@mui/material/DialogTitle';
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";
import { MdAdd } from "react-icons/md";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";


import * as api from "../api"
import StateWarning from "../StateWarning";
import WarningTable from "../WarningTable";
import WarningForm from "../WarningForm";



const WarningView = () => {
  const { warning, setWarning, formVisible, setFormVisible, toggle, setToggle, company, setCompany, location, setLocation, recDelete, setRecDelete, setOpen, open, setSubjectError, subjectError, setWarningError, warningError, setDescriptionError, descriptionError, setFormData, formData, navigate
  } = StateWarning()
  
  // name: '',
  // email: '',
  // message: '',

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value} = e.target;

    if(name === 'subject' ){
      const isValidSubject = value.length >= 2 && value.length <= 100;
      setSubjectError(!isValidSubject);

    }

    if(name === 'warningByEmployee' ){
      const isValidWarning = value.length >= 2 && value.length <= 60;
      setWarningError(!isValidWarning);

    }

    if (name === 'description') {
      const isValidDescription = value.length >= 2 && value.length <= 200;
      setDescriptionError(!isValidDescription);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [name] : value,

    });
  };


  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    handleClose();
  };

  useEffect(() => {
    loadwarning();
  }, []);

  const loadwarning = async () => {
    const result = await api.loadWarning()
    setWarning(result);
  };

  const handleDelete = async () => {
    await api.deleteWarning(recDelete);
    loadwarning();
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
        <div className="head-foot-part" style={{ padding: "0" }}>
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
                      ADD WARNING
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
      
          <h3>WARNING FORM</h3>
          </h3>
          
            <DialogContent>
              <WarningForm/>
            </DialogContent>
         
       
      </div>
      </Card>
            </Collapse>
      <WarningTable warning={warning} setRecDelete={setRecDelete} />
    </section>
        </div>
      </div>
    </div>
   
  );
};

export default WarningView;

