import React, { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api"
import { useNavigate,useState } from 'react-router-dom';
import StateHoliday from './StateHoliday';

const HolidayForm = () => {

  const navigate = useNavigate()

  const {holiday,setHoliday,formVisible,setFormVisible,toggle,setToggle,formErrors,setFormerrors,formControl,setFormControl,search,setSearch,dateError,setDateError,open,setOpen,recDelete,setRecDelete,formData,setFormData
  } = StateHoliday()

  const loadHoliday = async () => {
      const result = await api.loadHoliday()
      setHoliday(result);
    };

    useEffect(() => {
      loadHoliday()
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


    
    const handleHolidayChange = (e) => {
      const value = enforceMaxLength(e.target.value, 100);
      setFormData({
        ...formData,
        eventName: value,
      });
    };
  
  
    const isSubjectValid = () => {
      const { eventName } = formData;
      return /^[A-Za-z]+$/.test(eventName) && eventName.length >= 2 &&  eventName.length <= 50;
    };
  

    

    const saveHoliday = async () => {
  
      await api.saveHoliday(formData);
      alert("Holiday added successfully");
      navigate("/holiday ");
      
      setFormData({
        eventName: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    };

    const handleSubmit = (e) => {
   
      loadHoliday();
    }
  
return (
  <form onSubmit={handleSubmit}>
  <div className="data-input-fields">
      <TextField
        margin="dense"
        label="Event Name"
        type="text"
        fullWidth
        name="eventName"
        id="eventName"
        value={formData.eventName}
        onChange={(e) => handleHolidayChange(e)}
        required
        InputProps={{
          minLength: 2,
          maxLength: 100,
        }}
        error={isSubjectValid()}
        helperText={
          isSubjectValid()
            ?  'Event Name length should be between 2 and 50 characters.'
            : ''
        }
        onInput={(e) => {
          e.target.value = enforceMaxLength(e.target.value, 100);
          handleHolidayChange (e);
        }}
      />

     <TextField
        label="Start-Date"
          margin="dense"
          type="date"
          fullWidth
          name="startDate"
          SelectProps={{
            native: true,
          }}
          
          InputLabelProps = {{
            shrink: true,
          }}
          id="startDate"
          value={formData.startDate}
          onChange={(e) => handleInputChange(e)}
          required
          
        />
      </div>

    <div className="data-input-fields">
    <TextField
          margin="dense"
          label="End-Date"
          type="date"
          fullWidth
          name="endDate"
          id="endDate"
          SelectProps={{
            native: true,
          }}
          
          InputLabelProps = {{
            shrink: true,
          }}
          value={formData.endDate}
          onChange={(e) => handleInputChange(e)}
          required
          
        />
       <TextField
                margin="dense"
                label="Description"
                type="text"
                fullWidth
                name="description"
                id="description"
                value={formData.description}
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
 
      </div>


  <div className="data-buttons">
    <Button id="input-btn"
      variant="outlined"
      type="submit"
      onClick={saveHoliday}

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

export default HolidayForm;