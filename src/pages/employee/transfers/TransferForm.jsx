import React, { useEffect } from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import * as api from "./api"
import { useNavigate, useState } from 'react-router-dom';
import StateTransfer from './StateTransfer';

const TransferForm = () => {

    const getCurrentDate = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = `${now.getMonth() + 1}`.padStart(2, '0');
        const day = `${now.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
      };

    const navigate = useNavigate()

    const { formData, setLocation,location,setDescription,descriptionError,setDescriptionError, setFormData, dateError, setDateError,setOpen,setFormVisible,employee,setTransfer,setEmployee
    } = StateTransfer()

    const loadTransfer = async () => {
        const result = await api.loadTransfer()
        setTransfer(result);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const validateInput = (value, setValue, setError, fieldName) => {
        const isValid = value.length >= 2 && value.length <= 100;
        setError(isValid ? '' : `${fieldName} must be between 2 and 100 characters.`);
        setValue(value);
      };
    const handleDescriptionChange = (e) => {
        
        setDescription(e.target.value)
        validateInput(e.target.value, setDescription, setDescriptionError, 'Description');
      };

    const enforceMaxLength = (value, maxLength) => {
        return value.length <= maxLength ? value : value.slice(1, maxLength);
      };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'createdDate') {
            const isValidDate = value === getCurrentDate();
            setDateError(!isValidDate);
          };
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,

        });
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log("Form submitted:", formData);
        handleClose();
    };

    useEffect(() => {
        loadTransfer();
        fetchEmployee()
        fetchLocation()
    }, []);
    const fetchEmployee = async () => {
        const employeeData = await api.fetchEmployee()
        setEmployee(employeeData)
    };

    const fetchLocation = async () => {
        const locationData = await api.fetchLocations()
        setLocation(locationData)
      };


      console.log(location)

    const saveTransfer = async () => {

        await api.saveTransfer(formData);
        navigate("/employee/transfer");

        setFormData({

            employeeName: "",
            transferDate: "",
            transferToDepartment: "",
            transferToLocation: "",
            createdDate: getCurrentDate(),
        });

    };
    const dept = [
        {
            value: "Exempt Organization",
            label: "Exempt Organization",
        },
        {
            value: "Partnership",
            label: "Partnership",
        },
        {
            value: "Private Foundation",
            label: "Private Foundation",
        },
        {
            value: "Limited Liability Company",
            label: "Limited Liability Company",
        },
    ];

    console.log(location)

    return (
        <form onSubmit={handleSubmit}>
            <div className="data-input-fields">


                <TextField
                    id="employeeName"
                    select
                    margin="dense"
                    label="Employee Name"
                    fullWidth
                    defaultValue="Choose Employee"
                    SelectProps={{
                        native: true,
                    }}
                    value={formData.employeeName}
                    onChange={(e) => handleInputChange(e)}
                    name="employeeName"
                    InputLabelProps={{
                        shrink:true
                    }}
                >
                    {employee.map((option, index) => (
                        <option key={index} value={option.employeeName}>
                            {option.employeeName}
                        </option>
                    ))}
                    
                </TextField>

                <TextField
      margin="dense"
      label="Created Date"
      type="date"
      fullWidth
      name="transferDate"
      id="transferDate"
      value={formData.transferDate}
      onChange={(e) => handleInputChange(e)}
      InputLabelProps={{shrink:true}}
      required
      error={dateError}
      helperText={dateError ? 'Please select the current date' : ''}
    />
            </div>

            <div className="data-input-fields">
                <TextField
                    id="transferToDepartment"
                    select
                    margin="dense"
                    label="Transfer To Department"
                    fullWidth
                    defaultValue="EUR"
                    SelectProps={{
                        native: true,
                    }}
                    InputLabelProps={{
                            shrink: true,
                          }}
                    value={formData.departmentName}
                    onChange={(e) => handleInputChange(e)}
                    name="departmentName"
                >
                    {dept.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>

                
                <TextField
                    id="locationName"
                    select
                    margin="dense"
                    label="Location Name"
                    fullWidth
                    defaultValue="Choose Location"
                    SelectProps={{
                        native: true,
                    }}
                    value={formData.locationName}
                    onChange={(e) => handleInputChange(e)}
                    name="locationName"
                    InputLabelProps={{
                        shrink:true
                    }}
                >
                    {location.map((option, index) => (
                        <option key={index} value={option.locationName}>
                            {option.locationName}
                        </option>
                    ))}
                    
                </TextField>

                <TextField
                margin="dense"
                label="Description"
                type="text"
                fullWidth
                name="description"
                id="description"
                value={formData.description}
                onChange={(e)=>{handleDescriptionChange(e); handleInputChange(e);}}
                required
                error={!!descriptionError}
                    helperText={descriptionError}
                    onInput={(e) => {
                                e.target.value = enforceMaxLength(
                                  e.target.value,
                                  100
                                );
                                handleDescriptionChange(e);
                              }}
            />
            </div>

            <div className="data-buttons">

                <Button id="input-btn"
                    variant="outlined"
                    type="submit"
                    onClick={saveTransfer}

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

export default TransferForm;