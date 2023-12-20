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


import ExpensesForm from "../ExpensesForm";
import ExpensesTable from "../ExpensesTable";

import * as ExpensesApi from "../ExpensesApi";
import StateExpenses from "../StateExpenses";


const ExpensesView = () => {


  const {
    expenses,genId,setGenId,file,toggle, setToggle,setFile,formVisible, setFormVisible,fileError,totalAmount, setTotalAmount, setFileError,dateError,setDateError,setExpenses,open,setOpen,formData,setFormData,recDelete,setRecDelete
  } = StateExpenses();

  const handleButtonClick = () => {
    setFormVisible((prev) => !prev);
  };
  

 
  
  useEffect(() => {
    handleDelete();
    loadExpenses();
  }, []);

  const loadExpenses = async () => {
    const result = await ExpensesApi.loadExpenses()
    setExpenses(result);
  }

  const handleDelete = async () => {
    await ExpensesApi.deleteExpenses(recDelete)
    loadExpenses();
  };

  
  console.log(formData)

  useEffect(() => {
    loadExpenses();
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
                  style={{ height: "35px", marginBottom: "10px" }}
                >
                  {toggle ? (
                    <div className="hide">
                      <BiSolidHide />
                      HIDE
                    </div>
                  ) : (
                    <div className="add">
                      <MdAdd />
                      ADD EXPENSES
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
                    EXPENSES
                  </h3>
                  <DialogContent>
                    <Card style={{ margin: "20px", border: "1px solid black" }}>
                      <CardContent>
                       <ExpensesForm formData={formData} setFormData={setFormData}/>
                        
                        
                      </CardContent>
                     
                    </Card>
                   
                  </DialogContent>
                </div>
              </Card>
            </Collapse>
            <ExpensesTable expenses={expenses} setRecDelete={setRecDelete}/>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExpensesView;
