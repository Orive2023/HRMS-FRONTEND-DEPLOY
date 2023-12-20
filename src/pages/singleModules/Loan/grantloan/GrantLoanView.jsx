import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { MdAdd, MdApi } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";


import * as loanapi from "../loanapi"; 
import GrantLoanState from "../GrantLoanState";
import GrantLoanTable from "../GrantLoanTable";
import GrantLoanForm from "../GrantLoanForm";

import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";


const GrantLoanView = () => {
  const {
    formData, setFormData ,recDelete, setRecDelete,formVisible, setFormVisible,toggle, setToggle,loan, setLoan,permittedByError, setPermittedByError,loanDetailsByError, setLoanDetailsByError,pay,setPay,emiPay, setEmiPay,emiClear, setEmiClear 
} = GrantLoanState();


  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  useEffect(() => {
  }, []);

 
  const loadLoan= async () => {
    const result = await loanapi.loadLoan()
    console.log("rec", result);
    setLoan(result);
  };

  const handleDelete = async () => {
    await loanapi.deleteLoan(recDelete)
    loadLoan();
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
            style={{ height: "35px", margin:"10px 0" }}
          >
            {toggle ? (
              <div>
                <BiSolidHide style={{ fontSize: "14px", marginRight: "3px" }} />
                HIDE
              </div>
            ) : (
              <div>
                <MdAdd style={{ fontSize: "14px", marginRight: "3px" }} />
                ADD LOAN
              </div>
            )}
          </Button>
        </div>
      </div>
      <Collapse in={formVisible}>
        <Card variant="outlined" style={{ boxShadow: " 1px 1px 10px black" }}>
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{
                textAlign: "center",
                marginTop: "25px",
                fontWeight: "600",
              }}
            >
              GRANT LOAN FORM
            </h3>
            <DialogContent>
            <GrantLoanForm formData={formData} setFormData={setFormData}/>
            </DialogContent>
          </div>
        </Card>
      </Collapse>
      <br />

      <GrantLoanTable loan={loan} setRecDelete={setRecDelete}/>
      
    </section>
        </div>
      </div>
    </div>
    
  );
};

export default GrantLoanView;