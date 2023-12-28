import React, { useEffect } from "react";
import Header from "../../../../components/Header";
import SideBar from "../../../../components/SideBar";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import { MdAdd } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import Collapse from "@mui/material/Collapse";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CreditForm from "../CreditForm";
import StateCredit from "../StateCredit";
import CreditTable from "../CreditTable";
import * as CreditApi from "../CreditApi";


const CreditView = () => {


  const {
    credit,genId,setGenId,file,toggle, setToggle,setFile,formVisible, setFormVisible,fileError,totalAmount, setTotalAmount, setFileError,dateError,setDateError,setCredit,open,setOpen,formData,setFormData,recDelete,setRecDelete
  } = StateCredit();

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };
  
  useEffect(() => {
    handleDelete();
    loadCredit();
  }, []);

  const loadCredit = async () => {
    const result = await CreditApi.loadCredit()
    console.log("rec", result);
    setCredit(result);
  }

  const handleDelete = async () => {
   
    await CreditApi.deleteCredit(recDelete)
    loadCredit();
  };

  console.log(formData)
  useEffect(() => {
    loadCredit();
  }, []);


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
                  id='add-btn'                >
                  {toggle ? (
                    <div className="hide">
                      <BiSolidHide />
                      HIDE
                    </div>
                  ) : (
                    <div className="add">
                      <MdAdd />
                      ADD CREDIT
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
                  CREDIT
                  </h3>
                  <DialogContent>
                    <Card style={{ margin: "20px", border: "1px solid black" }}>
                      <CardContent>
                       <CreditForm/> 
                      </CardContent>
                    </Card>
                   
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <CreditTable credit={credit} setRecDelete={setRecDelete}/>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default  CreditView;
