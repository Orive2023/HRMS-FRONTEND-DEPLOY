import React, { useEffect } from "react";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import { MdAdd } from "react-icons/md";

import StateSubType from "../StateSubType";
import SubTypeTable from "../SubTypeTable";
import * as api from "../api"
import SubTypeForm from "../SubTypeForm";

const SubTypeView = () => {
  const {
    subType, setSubType, open, setOpen, recDelete, setRecDelete, formData, setFormData
  } = StateSubType();

 

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  useEffect(() => {
    loadSubType();
  }, []);

  const loadSubType = async () => {
    const response = await api.loadSubType()
      setSubType(response);
  };


  const handleDelete = async () => {
    await api.deleteSubType(recDelete)
    loadSubType()
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
                  onClick={handleOpen}
                  style={{ height: "35px" }}
                >
                  <MdAdd style={{ fontSize: "14px", marginRight: "3px" }} />
                  ADD SUBTYPE
                </Button>
              </div>
            </div>
            <SubTypeTable subType={subType} setRecDelete={setRecDelete}/>
            <div>
              <Dialog open={open} onClose={handleClose}>
                <h3 style={{ textAlign: "center", marginTop: "30px" }}>
                  SUBTYPE FORM
                </h3>
                <DialogContent>
                 <SubTypeForm />
                </DialogContent>
              </Dialog>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SubTypeView;
