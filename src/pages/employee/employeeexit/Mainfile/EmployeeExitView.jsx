import React, { useEffect, useState } from "react";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import { MdAdd } from "react-icons/md";

import * as api from "../api";
import StateEmployeeExit from "../StateEmployeeExit";
import EmployeeExitTable from "../EmployeeExitTable";
import EmployeeExitForm from "../EmployeeExitForm";

const EmployeeExitView = () => {
  const {
    descriptionError,
    setDescriptionError,
    employee,
    setEmployee,
    formVisible,
    setFormVisible,
    employeeExit,
    setEmployeeExit,
    search,
    setSearch,
    open,
    setOpen,
    recDelete,
    setRecDelete,
    dateError,
    setDateError,
    formData,
    setFormData,
  } = StateEmployeeExit();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    loadEmployeeExit();
  }, []);

  const loadEmployeeExit = async () => {
    const result = await api.loadEmployeeExit();
    setEmployeeExit(result);
  };

  const handleDelete = async () => {
    await api.deleteEmployeeExit(recDelete);
    loadEmployeeExit();
  };

  useEffect(() => {
    if (recDelete !== "") {
      handleDelete();
      setRecDelete("");
    }
  });

  console.log(employeeExit)
  console.log(formData)

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part">
          <section>
            <div className="above-table">
              <Button variant="outlined" onClick={handleOpen}>
                <MdAdd className="add" />
                Add employee exit
              </Button>
            </div>
            <Dialog open={open} onClose={handleClose}>
              <h3
                style={{
                  textAlign: "center",
                  marginTop: "25px",
                  fontWeight: "600",
                }}
              >
                EMPLOYEE EXIT
              </h3>
              <DialogContent>
                <EmployeeExitForm formData={formData} setFormData={setFormData}/>
              </DialogContent>
            </Dialog>
            <EmployeeExitTable
              employeeExit={employeeExit}
              setRecDelete={setRecDelete}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmployeeExitView;
