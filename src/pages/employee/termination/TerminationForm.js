import React, { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api"
import { useNavigate,useState } from 'react-router-dom';
import StateTermination from './StateTermination';
import { FormControl,MenuItem,Select,InputLabel} from '@mui/material';


const TerminationForm = () => {

    const navigate = useNavigate()

    const {formData, setFormData,employeeName,setEmployeeName,dateError,setDateError,description,setDescription, formVisible,setFormVisible, formErrors, setFormerrors, open, setOpen,  toggle, setToggle, termination, setTermination, formControl, setFormControl, recDelete, setRecDelete
     } = StateTermination()

    const loadTermination = async () => {
        const result = await api.loadTermination()
        setTermination(result);
      };

      useEffect(() => {
        loadTermination()
        fetchEmployee();
      },[])

      const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = `${now.getMonth() + 1}`.padStart(2, '0');
        const day = `${now.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
      const handledesChange = (e) => {
        setDescription(e.target.value);
      };
      const enforceMaxLength = (value, maxLength) => {
        return value.slice(0, maxLength);
      };
     
     
    
      
      const handleEmployeeNameChange = (e) => {
        const value = enforceMaxLength(e.target.value, 100);
        setFormData({
          ...formData,
          employeeName: value,
        });
      };
    
      const isSubjectValid = () => {
        const { employeeName } = formData;
        return /^[A-Za-z]+$/.test (employeeName.length !== 0) || (employeeName.length <2 && employeeName.length >=50);
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'terminateDate') {
          const isValidDate = value === getCurrentDate();
          setDateError(!isValidDate);
        }
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
          [name]: value,
        });
      };
    
      const saveTermination = async () => {
    
        await api.saveTermination(formData);
        alert("Termination added successfully");
        navigate("/termination ");
        
        setFormData({
            employeeName: "",
            terminateDate: "",
            reasonForTermination: "",
            terminatedBy:"",
        });
      };

      const handleSubmit = (e) => {
     
        loadTermination();
      }

      const fetchEmployee = async () => {
        const employeeData = await api.fetchEmployee()
        setEmployeeName(employeeData)
      };

      const term= [
        {
          value: "Choose",
          label: "Select progress",
        },
        {
          value: "Incomplete",
          label: "Incomplete",
        },
        {
          value: "Complete",
          label: "Complete",
        },
      
      ];      
    
  return (
    <form onSubmit={handleSubmit}>
    <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Title"
          type="text"
          fullWidth
          name="employeeName"
          id="employeeName"
          value={formData.employeeName}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 100,
          }}
          error={!isSubjectValid()}
          helperText={
            !isSubjectValid()
              ? 'Subject length should be between 2 and 50 characters.'
              : ''
          }
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleEmployeeNameChange (e);
          }}
        />
         
       

        <TextField
          margin="dense"
          type="date"
          fullWidth
          name="terminateDate"
          id="terminateDate"
          value={formData.terminateDate}
          onChange={(e) => handleInputChange(e)}
          required
          
        />
      </div>

      <div className="data-input-fields">
      {/* <FormControl fullWidth>
         <InputLabel id="demo-termination-select-label">
         Reason For Terminate
         </InputLabel>
         <Select
           labelId="demo-termination-select-label"
           id="reasonForTermination"
           value={formData.reasonForTermination}
           name="reasonForTermination"
           label="reasonForTermination"
           onChange={(e) => handleInputChange(e)}
           required
         >
           {reasonForTermination.map((item, index) => {
             return (
               <MenuItem key={index} value={item.reasonForTermination}>
                 {item.reasonForTermination}
               </MenuItem>
             );
           })}
         </Select>
       </FormControl> */}
      
         <TextField
                margin="dense"
                label="Reason For Termination"
                type="text"
                fullWidth
                name="reasonForTermination"
                id="reasonForTermination"
                value={formData.reasonForTermination}
                onChange={(e) => handleInputChange(e)}
                required
                InputProps={{
                  minLength: 2, // Set your minimum length here
                  maxLength: 500, // Set your maximum length here
                }}
                onInput={(e) => {
                  e.target.value = enforceMaxLength(e.target.value, 500);
                  handledesChange(e);
                }}

              />
        <TextField
          margin="dense"
          label="Terminated By"
          type="text"
          fullWidth
          name="terminatedBy"
          id="terminatedBy"
          value={formData.terminatedBy}
          onChange={(e) => handleInputChange(e)}
          required
         
        />
        </div>   

    <div className="data-buttons">

      <Button id="input-btn"
        variant="outlined"
        type="submit"
        onClick={saveTermination}

      >
        Submit
      </Button>
      <Button id="input-btn"
        variant="outlined"
        onClick={() => setFormVisible(false)}

      >
        Cancel
      </Button>
    </div>


  </form>
  )
}

export default TerminationForm