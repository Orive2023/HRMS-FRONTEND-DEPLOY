import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
//import Search from "../../common/Search";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";
import { MdAdd } from "react-icons/md";
import { IoMdHome } from "react-icons/io";

import SideBar from "../../../../components/SideBar";
import Header from "../../../../components/Header";
import Collapse from "@mui/material/Collapse";
import { Card } from "@mui/material";
import { BiSolidHide } from "react-icons/bi";



import * as api from "../api"
import StatePromotion from "../StatePromotion";
import PromotionTable from "../PromotionTable";
import PromotionForm from "../PromotionForm";



const PromotionView = () => {


  const { promotion, setPromotion, formVisible, setFormVisible, toggle, setToggle,recDelete, setRecDelete,formData,setFormData
  } = StatePromotion()
 
  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  useEffect(() => {
    loadpromotion();
  }, []);

  const loadpromotion = async () => {
    const result = await api.loadPromotion()
    setPromotion(result);
    console.log(result);
  };

  const handleDelete = async (id) => {
    console.log(id);
    await api.deletePromotion(recDelete)
    loadpromotion();
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
                      ADD PROMOTION  </div>
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
                    <h3> PROMOTION FORM</h3>
                  </h3>
                  <DialogContent>
                    
                    <PromotionForm formData={formData} setFormData={setFormData} setFormVisible={setFormVisible} setToggle={setToggle} />
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <PromotionTable promotion={promotion} setRecDelete={setRecDelete} />
          </section>
          </div>
      </div>
    </div>
  );
};

export default PromotionView;
