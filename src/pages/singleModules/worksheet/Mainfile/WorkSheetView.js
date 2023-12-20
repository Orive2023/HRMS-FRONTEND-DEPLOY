import React, { useEffect } from "react";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";

import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import { MdAdd } from "react-icons/md";
import Collapse from "@mui/material/Collapse";
import { BiSolidHide } from "react-icons/bi";
import { Card } from "@mui/material";

import * as api from "../api"
import StateWorksheet from "../StateWorksheet";
import WorksheetTable from "../WorksheetTable";
import WorkSheetForm from "../WorksheetForm";


const WorksheetView = () => {

  const {
    worksheet,setWorksheet,formVisible,setFormVisible,toggle,setToggle,recDelete,setRecDelete
  } =StateWorksheet();
 

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  useEffect(() => {
    loadWorksheet();
  }, []);

  const loadWorksheet = async () => {
    const result = await api.loadWorksheet()
    setWorksheet(result);
  };

  const handleDelete = async () => {
    await api.deleteWorksheet(recDelete)
    loadWorksheet();
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
                      ADD WORKSHEET
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
                    <h3> WORKSHEET FORM</h3>
                  </h3>
                  <DialogContent>
                  
                    <WorkSheetForm/>
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <WorksheetTable worksheet={worksheet} setRecDelete={setRecDelete} />
          </section>
        </div>
      </div>
    </div>
  );
};
                        
export default WorksheetView;