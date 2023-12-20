import React, { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select,InputLabel } from "@mui/material";

import * as api from "./api"
import { useNavigate,useState } from 'react-router-dom';
import StateResignation from './StateResignation';


const ResignationForm = () => {

    const navigate = useNavigate()


    const {formData,setFormData,formVisible,formErrors,setFormerrors,open, setOpen,setFormVisible,toggle,setToggle,resignation, setResignation, formControl,setFormControl,recDelete,setRecDelete

    } = StateResignation()
    const loadResignation = async () => {
        const result = await api.loadResignation()
        setResignation(result);
      };

      useEffect(() => {
        loadResignation()
       
      },[])
  
    
      const saveResignation= async () => {
    
        await api.saveResignation(formData);
        navigate("/employee/resignation");
        
        setFormData({
           employeeName: "",
             resignationDate: "",
            noticeDate: "",
            resignationReason: "",
        });
      };

      const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      
      
      const handleInputChange = (e) => {
        const { name, value } = e.target; // Destructure name and value from the event target
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        handleClose();
      };
    
        // Add your validation logic here
      
    
    
      
  
    
    
  return (
    <form onSubmit={handleSubmit}>
    <TextField
      margin="dense"
      label="employee name"
      type="text"
      fullWidth
      name="employeeName"
      id="employeeName"
      value={formData.employeeName}
      onChange={(e) => handleInputChange(e)}
      required
    />

    <div style={{ display: "flex" }}>
      <TextField
        margin="dense"
        label="Notice Date"
        type="date"
        fullWidth
        name="noticeDate"
        id="noticeDate"
        value={formData.noticeDate}
        onChange={(e) => handleInputChange(e)}
        required
        style={{ margin: "8px 3px" }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <TextField
        margin="dense"
        label="Resignation Date"
        type="date"
        fullWidth
        name="resignationDate"
        id="resignationDate"
        value={formData.resignationDate}
        onChange={(e) => handleInputChange(e)}
        required
        style={{ margin: "8px 3px" }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
    <TextField
      margin="dense"
      label="Resignation reason"
      type="text"
      fullWidth
      name="resignationReason"
      id="resignationReason"
      value={formData.resignationReason}
      onChange={(e) => handleInputChange(e)}
      required
      style={{ marginBottom: "8px" }}
    />
   
      <Button
        type="submit"
        onClick={saveResignation}
        style={{
          background: "linear-gradient(to right, #1cb5e0, #000046)",
          height: "35px",
          width: "49%",
          color: "white",
          margin: "0 5px",
        }}
        variant="outlined"
      >
        Submit
      </Button>
      <Button
        onClick={handleClose}
        style={{
          background: "linear-gradient(to left, #1cb5e0, #000046)",
          height: "35px",
          width: "49%",
          color: "white",
          margin: "0 5px",
        }}
        variant="outlined"
      >
        Cancel
      </Button>
    
  </form>
                    
  )
}

export default ResignationForm