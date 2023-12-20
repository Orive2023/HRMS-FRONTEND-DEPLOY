import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

import * as api from "./api";
import { useNavigate, useState } from "react-router-dom";
import StateTicket from "./StateTicket";

const TicketForm = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  const {
    setFormVisible,
    formErrors,
    setFormErrors,
    setTicket,
    employee,
    setEmployee,
    setErrorCode,
    valueCode,
    setTicketsValue,
    errorCode,
    ticketsCode,
  } = StateTicket();
  const loadTicket = async () => {
    const result = await api.loadTicket();
    setTicket(result);
  };

  useEffect(() => {
    loadTicket();
    fetchEmployee();
  }, []);

  const saveTicket = async () => {
    await api.saveTicket(formData);
    navigate("/ticket");
    setFormData({
      ticketsCode: "",
      subject: "",
      employeeName: "",
      priority: "",
      date: "",
    });
  };

  const handleSubmit = (e) => {
    console.log("FormData", formData);
  };

  const fetchEmployee = async () => {
    const employee = await api.fetchEmployee();
    setEmployee(employee);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "ticketsCode") {
      const truncatedValue = enforceMaxCode(valueCode, 10);
      handleCodeChange(truncatedValue);
      setFormData({
        ...formData,
        [name]: truncatedValue,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const enforceMaxLength = (value, maxLength) => {
    return value.slice(0, maxLength);
  };

  const handleSubChange = (e) => {
    const value = enforceMaxLength(e.target.value, 50);
    setFormData({
      ...formData,
      subject: value,
    });
  };

  const handleCodeChange = (e) => {
    const value = enforceMaxLength(e.target.value, 10);
    setFormData({
      ...formData,
      ticketsCode: value,
    });
  };

  const enforceMaxCode = (valueCode, maxLength) => {
    return valueCode.length <= maxLength
      ? valueCode
      : valueCode.slice(0, maxLength);
  };

  const isTicketCodeValid = () => {
    if (valueCode.length < 2 || valueCode.length > 10) {
      setErrorCode("Invalid length. Length should be between 2 to 10.");
    } else {
      setErrorCode("");
    }
    setTicketsValue(ticketsCode);
  };

  const isSubjectValid = () => {
    const { subject } = formData;
    return subject.length <= 2 && subject.length >= 50;
  };

  const handleTicketsCodeChange = (e) => {
    const valueCode = e.target.value;

    setFormData({
      ...formData,
      //ticketsCode: value,
    });

   
  };

  const Type = [
    {
      value: "Choose",
      label: "Select Priority",
    },
    {
      value: "Low",
      label: "Low",
    },
    {
      value: "Medium",
      label: "Medium",
    },
    {
      value: "High",
      label: "High",
    },
  ];

  console.log(formData)

  return (
    <form onSubmit={handleSubmit}>
      <div className="data-input-fields">
        <TextField
          margin="dense"
          label="Ticket Code"
          type="number"
          fullWidth
          name="ticketsCode"
          id="ticketsCode"
          value={formData.ticketsCode}
          onChange={(e) => handleCodeChange(e)}
          InputProps={{
            minLength: 2,
            maxLength: 10,
          }}
        />

        <TextField
          margin="dense"
          label="Subject"
          type="text"
          fullWidth
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={(e) => handleInputChange(e)}
          required
          InputProps={{
            minLength: 2,
            maxLength: 50,
          }}
          error={isSubjectValid()}
          helperText={
            isSubjectValid()
              ? "Subject length should be between 2 and 50 characters."
              : ""
          }
          onInput={(e) => {
            e.target.value = enforceMaxLength(e.target.value, 100);
            handleSubChange(e);
          }}
        />
      </div>

      <div className="data-input-fields">
        <FormControl fullWidth>
          <InputLabel id="demo-company-select-label">Employee Name</InputLabel>
          <Select
            labelId="demo-company-select-label"
            id="selectedEmployee"
            value={formData.employeeName}
            name="employeeName"
            label="Employee Name"
            onChange={(e) => handleInputChange(e)}
          >
            {employee.map((item, index) => {
              return (
                <MenuItem key={index} value={item.employeeName}>
                  {item.employeeName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        <TextField
          id="priority"
          margin="dense"
          select
          label="Priority"
          fullWidth
          defaultValue="Choose"
          SelectProps={{
            native: true,
          }}
          InputLabelProps={{
            shrink: true,
          }}
          value={formData.priority}
          onChange={(e) => handleInputChange(e)}
          name="priority"
        >
          {Type.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          margin="dense"
          label="Date"
          type="date"
          fullWidth
          name="date"
          id="date"
          value={formData.date}
          onChange={(e) => handleInputChange(e)}
          required
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <Button
        type="submit"
        onClick={saveTicket}
        style={{
          background: "linear-gradient(to right, #1cb5e0, #000046)",
          height: "35px",
          width: "48%",
          color: "white",
          margin: "0 7px",
        }}
        variant="outlined"
      >
        Submit
      </Button>
      <Button
        onClick={() => setFormVisible(false)}
        style={{
          background: "linear-gradient(to left, #1cb5e0, #000046)",
          height: "35px",
          width: "48%",
          color: "white",
          margin: "0 7px",
        }}
        variant="outlined"
      >
        Cancel
      </Button>
    </form>
  );
};

export default TicketForm;
