import React, { useEffect } from "react";


import Button from "@mui/material/Button";

import DialogContent from "@mui/material/DialogContent";
import { MdAdd } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import { Card } from "@mui/material";

import * as api from "../api"
import StateProject from "../StateProject";
import ProjectTable from "../ProjectTable";
import ProjectForm from "../ProjectForm";

const ProjectView = () => {

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  useEffect(() => {
    loadProject();
  }, []);
 
  const {
    project,formVisible,toggle,setToggle,setRecDelete,setProject,recDelete,setFormVisible,formData,setFormData

 } = StateProject();

  const loadProject = async () => {
    const result = await api.loadProject()
    console.log("rec", result);
    setProject(result);
  };

  const handleDelete = async () => {
    await api.deleteProject(recDelete)
    loadProject();
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
                  style={{ height: "35px", margin: "10px 0" }}
                >
                  {toggle ? (
                    <div companyName="hide">
                      <BiSolidHide style={{ fontSize: "14px", marginRight: "3px" }} />
                      HIDE
                    </div>
                  ) : (
                    <div className="add">
                      <MdAdd style={{ fontSize: "14px", marginRight: "3px" }} />
                      ADD PROJECT
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
                    PROJECT FORM
                  </h3>
                  <DialogContent>
                    <ProjectForm formData={formData} setFormData={setFormData} setFormVisible={setFormVisible} setToggle={setToggle}/>
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <br />
            <ProjectTable project={project} setRecDelete={setRecDelete}/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;