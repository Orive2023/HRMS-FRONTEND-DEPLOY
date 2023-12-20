import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { MdAdd } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { styled } from "@mui/material/styles";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import * as api from "../api"; 

import StateEmployee from "../StateEmployee";
import EmployeeForm from "../EmployeeForm";
import EmployeeTable from "../EmployeeTable";
const EmployeeView = () => {
  const {
    formVisible,
    setFormVisible,
    toggle,
    setToggle,
    employeeData,
    setEmployeeData,
    employee,
    setemployees,
    formData,recDelete,setRecDelete
    
  } = StateEmployee();

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };



  const handleDelete = async () => {
    await api.deleteEmployee(recDelete)
    loademployees();
  };

  useEffect(() => {
    if (recDelete !== "") {
      handleDelete()
      setRecDelete("")
    }
  })

  //const formRef = useRef()

  const loademployees = async () => {
    const result = await api.loademployees();
    setEmployeeData(result);

  };

  useEffect(() => {
    loademployees();
  }, []);

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part">
          <section>
            <p>
              <IoMdHome style={{ fontSize: "25px", marginTop: "-8px" }} />{" "}
              <span style={{ fontWeight: "600", fontSize: "18px" }}>
                /Employees/
              </span>
              <span style={{ fontSize: "18px" }}>Employee</span>
            </p>
            <div
              className="above-table"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* <Search search={search} setSearch={setSearch} /> */}
              <div>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setToggle(!toggle);
                    handleButtonClick();
                  }}
                  style={{ height: "35px" }}
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
            <Collapse in={formVisible}>
              <EmployeeForm />
            </Collapse>
            <br />

            <EmployeeTable employee={employeeData} setRecDelete={setRecDelete}/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;
