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
import StateLeave from "../StateLeave";
import LeaveTable from "../LeaveTable";
import LeaveForm from "../LeaveForm";


const LeaveView = () => {

  const { leave, setLeave, formVisible, setFormVisible, toggle, setToggle, recDelete, setRecDelete
  } = StateLeave()

  
  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

 

  useEffect(() => {
    api.loadLeave();
  }, );

  const loadLeave= async () => {
    const result = await api.loadLeave()
    console.log("rec", result);
    StateLeave(result);
  };


  const handleDelete = async () => {
    await api.deleteLeave(recDelete)
    loadLeave();
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
                      ADD LEAVE
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
                    <h3> LEAVE FORM</h3>
                  </h3>
                  <DialogContent>
                    
                    <LeaveForm />
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <LeaveTable leave={leave} setRecDelete={setRecDelete} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default LeaveView;
