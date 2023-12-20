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
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";

import * as api from "../api"
import StateAward from "../StateAward";
import AwardTable from "../AwardTable";
import AwardForm from "../AwardForm";


const AwardsView = () => {
  // const [formVisible, setFormVisible] = useState(false);
  // const [award, setAward] = useState([]);
  // const [search, setSearch] = useState("");
  // const [open, setOpen] = useState(false);
  // let navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   employeeName: "",
  //   awardName: "",
  //   giftName: "",
  //   cashPrice: "",
  //   awardDate: "",
  //   awardBy:"",
  // });

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };

  const { setRecDelete,recDelete,setFormVisible,award,setAward,open,setOpen,formData,setFormData } = StateAward();
  // name: '',
  // email: '',
  // message: '',

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    loadAward();
  }, []);

  const loadAward = async () => {
    const result = await api.loadAward();
    setAward(result);
    console.log(result);
  };

  const handleDelete = async () => {
    await api.deleteAward(recDelete);
    loadAward()
  };

  useEffect(() => {
    if (recDelete !== "") {
      handleDelete();
      setRecDelete("");
    }
  });

  console.log(formData)

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" style={{ padding: "0" }}>
          <section>
            <p>
              <IoMdHome style={{ fontSize: "25px", marginTop: "-8px" }} />{" "}
              <span style={{ fontWeight: "600", fontSize: "18px" }}>/Employees/</span>
              <span style={{ fontSize: "18px" }}>Award</span>
            </p>
            <div
              className="above-table"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {/* <Search search={search} setSearch={setSearch} /> */}
              <Button
                variant="outlined"
                onClick={handleOpen}
                style={{ height: "35px" }}
              >
                <MdAdd style={{ fontSize: "14px", marginRight: "3px" }} />
                Add awards
              </Button>
            </div>
           
            <div>
              <Dialog open={open} onClose={handleClose}>
                {/* <DialogTitle>POLICY FORM</DialogTitle> */}
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "25px",
                    fontWeight: "600",
                  }}
                >
                  Awards
                </h3>
                <DialogContent>
                  <AwardForm formData={formData} setFormData={setFormData}/>
                </DialogContent>
              </Dialog>
            </div>
            <AwardTable award={award} setRecDelete={setRecDelete}/>
          </section>
        </div>
      </div>
    </div>

  );
};

export default AwardsView;

